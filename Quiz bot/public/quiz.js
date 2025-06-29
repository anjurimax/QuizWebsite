let currentCategory = "";
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 30;
let selectedAnswers = [];

function updateTimerDisplay() {
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = `⏰ Time left: ${timeLeft}s`;
}

function startQuiz() {
  currentCategory = document.getElementById("category").value;
  console.log("📌 Selected Category:", currentCategory);
  console.log("📌 allQuestions:", allQuestions);
  currentQuestions = [...allQuestions[currentCategory]].sort(
    () => 0.5 - Math.random()
  );
  if (!currentQuestions.length) {
    console.error("🚫 No questions loaded for category:", currentCategory);
    alert("No questions found for selected category.");
    return;
  }

  console.log("✅ Questions loaded:", currentQuestions);
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = new Array(currentQuestions.length).fill(null);

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.style.display = "block";
  quizContainer.className = "question-box";
  quizContainer.classList.add(`${currentCategory}-bg`);

  document.getElementById("timer").style.display = "block";
  document.getElementById("question").style.display = "block";
  document.getElementById("options").style.display = "block";
  document.getElementById("nextBtn").style.display = "inline-block";
  document.getElementById("prevBtn").style.display = "inline-block";

  const progressBar = document.getElementById("progress-bar");
  if (progressBar) progressBar.style.width = "0%";

  const resultBox = document.getElementById("resultBox");
  if (resultBox) {
    resultBox.style.display = "none";
    resultBox.innerHTML = "";
  }

  document.getElementById("nextBtn").onclick = () => nextQuestion(false);
  document.getElementById("prevBtn").onclick = () => previousQuestion();

  showQuestion();
}

function showQuestion() {
  const qObj = currentQuestions[currentQuestionIndex];
  const totalQuestions = currentQuestions.length;
  document.getElementById("question").textContent = `Q${
    currentQuestionIndex + 1
  } of ${totalQuestions}: ${qObj.q}`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  qObj.options.forEach((opt, index) => {
    const optionBox = document.createElement("div");
    optionBox.className = "option-box";
    optionBox.innerHTML = `
      <input type="radio" id="opt${index}" name="option" value="${index}" style="display: none;">
      <label for="opt${index}">${opt}</label>
    `;

    if (selectedAnswers[currentQuestionIndex] === index) {
      optionBox.classList.add("selected");
      setTimeout(() => {
        optionBox.querySelector("input").checked = true;
      }, 0);
    }

    optionBox.addEventListener("click", () => {
      document.querySelectorAll(".option-box").forEach((box) => {
        box.classList.remove("selected");
        box.querySelector("input[type='radio']").checked = false;
      });

      optionBox.classList.add("selected");
      optionBox.querySelector("input[type='radio']").checked = true;
      selectedAnswers[currentQuestionIndex] = index;
    });

    optionsDiv.appendChild(optionBox);
  });

  document.getElementById("prevBtn").disabled = currentQuestionIndex === 0;

  updateProgress();
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      nextQuestion(true);
    }
  }, 1000);
}

function updateProgress() {
  const progressBar = document.getElementById("progress-bar");
  const percentage =
    ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
  progressBar.style.width = `${percentage}%`;
}

function nextQuestion(autoNext = false) {
  const selected = document.querySelector('input[name="option"]:checked');
  const correctAnswer = currentQuestions[currentQuestionIndex].answer;

  if (
    !selected &&
    selectedAnswers[currentQuestionIndex] === null &&
    !autoNext
  ) {
    alert("Please select an answer!");
    return;
  }

  if (selected) {
    selectedAnswers[currentQuestionIndex] = parseInt(selected.value);
  }

  if (selectedAnswers[currentQuestionIndex] === correctAnswer) {
    if (!scoreCounted(currentQuestionIndex)) {
      score++;
    }
  }

  currentQuestionIndex++;
  clearInterval(timerInterval);

  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    clearInterval(timerInterval);
    showQuestion();
  }
}

function scoreCounted(index) {
  let count = 0;
  for (let i = 0; i <= index; i++) {
    if (selectedAnswers[i] === currentQuestions[i].answer) {
      count++;
    }
  }
  return count <= score;
}

function showScore() {
  clearInterval(timerInterval);

  const quizContainer = document.getElementById("quiz-container");
  const resultBox = document.getElementById("resultBox");

  quizContainer.style.display = "none";
  resultBox.style.display = "block";

  let reviewHTML = `<h2>Quiz Completed!</h2>`;
  reviewHTML += `<p>Your Score: <strong>${score} / ${currentQuestions.length}</strong></p><hr/>`;

  const username = sessionStorage.getItem("username") || "Guest";

  const leaderboardKey = `leaderboard_}`;
  const existing = JSON.parse(localStorage.getItem(leaderboardKey)) || [];

  existing.push({ name: username, score });
  existing.sort((a, b) => b.score - a.score);
  localStorage.setItem(leaderboardKey, JSON.stringify(existing));

  socket.emit("submit-score", { username, score });

  currentQuestions.forEach((q, index) => {
    const userAnswer = selectedAnswers[index];
    reviewHTML += `
      <div style="text-align: left; margin-bottom: 1rem;">
        <p><strong>Q${index + 1}:</strong> ${q.q}</p>
        ${q.options
          .map((opt, i) => {
            let style = "padding:5px; display:block;";
            if (i === q.answer) {
              style +=
                "background-color: #d4edda; border-left: 5px solid #28a745;";
            }
            if (i === userAnswer && userAnswer !== q.answer) {
              style +=
                "background-color: #f8d7da; border-left: 5px solid #dc3545;";
            }
            return `<div style="${style}">${
              i === userAnswer ? "👉 " : ""
            }${opt}</div>`;
          })
          .join("")}
      </div>
    `;
  });

  reviewHTML += `<hr/><h3>🏆 Leaderboard }</h3><ol>`;
  existing.slice(0, 5).forEach((entry) => {
    reviewHTML += `<li><strong>${entry.name}</strong> - ${entry.score}</li>`;
  });
  reviewHTML += `</ol>`;

  reviewHTML += `<button id="restartBtn">Restart Quiz</button>`;
  resultBox.innerHTML = reviewHTML;

  document.getElementById("restartBtn").addEventListener("click", () => {
    resultBox.style.display = "none";
    document.getElementById("progress-container").style.display = "block";
    startQuiz();
  });
}

// ✅ Multiplayer logic

document.getElementById("startBtn").addEventListener("click", () => {
  console.log("Start clicked -", username); // Debug log
  socket.emit("start-quiz", { username });
});

socket.on("begin-quiz", () => {
  console.log("Received begin-quiz event");
  startQuiz(); // Start for all users
});

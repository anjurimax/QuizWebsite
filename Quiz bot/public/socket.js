// ✅ socket.js (updated)
const socket = io();
window.socket = socket;

window.username = sessionStorage.getItem("username");

// Join logic removed — just connect and listen if needed

socket.on("begin-quiz", () => {
  console.log("🔔 Quiz started!");
  if (typeof startQuiz === "function") {
    startQuiz();
  }
});

// Send answer if you want (optional)
function sendAnswer(answer) {
  socket.emit("sendAnswer", { username, answer });
}

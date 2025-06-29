// ✅ server.js (updated)
const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");

const server = http.createServer(app);
const io = socketIo(server);

const USERS_FILE = "./users.json";

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ✅ Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ SIGNUP
app.post("/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.json({ success: false, message: "All fields required." });
  }

  let users = [];
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE));
  }

  if (users.find((u) => u.email === email)) {
    return res.json({ success: false, message: "Email already exists!" });
  }

  users.push({ username, email, password, results: [] });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));

  res.json({ success: true });
});

// ✅ LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, message: "All fields required." });
  }

  let users = [];
  if (fs.existsSync(USERS_FILE)) {
    users = JSON.parse(fs.readFileSync(USERS_FILE));
  }

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.json({ success: true, username: user.username });
  } else {
    res.json({ success: false, message: "Invalid credentials!" });
  }
});

// ✅ SOCKET.IO logic
io.on("connection", (socket) => {
  console.log("✅ User connected:", socket.id);

  // Example: handle quiz start (individual)
  socket.on("start-quiz", ({ username }) => {
    console.log(`🚀 ${username} started quiz`);
    socket.emit("begin-quiz");
  });

  // Save score without rooms
  socket.on("submit-score", ({ username, score }) => {
    let users = [];
    if (fs.existsSync(USERS_FILE)) {
      users = JSON.parse(fs.readFileSync(USERS_FILE));
    }

    const user = users.find((u) => u.username === username);
    if (user) {
      user.results.push({ score, date: new Date().toISOString() });
      fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
      console.log(`💾 Saved score for ${username}`);
    }
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

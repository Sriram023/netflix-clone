const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Mock user
const USER = {
  email: "admin@gmail.com",
  password: "123456",
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    return res.json({ success: true });
  }

  res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
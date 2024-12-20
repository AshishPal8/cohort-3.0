import express from "express";
import jwt from "jsonwebtoken";
import { User } from "./db";
import { userMiddleware } from "./middleware";
import { JWT_PASSWORD } from "./config";

const app = express();
const port = 3000;

app.post("/api/v1/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username,
    password,
  });

  res.json({ message: "User signup successfull" });
});

app.post("/api/v1/signin", userMiddleware, async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username, password });

  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_PASSWORD
    );

    res.status(200).json({ message: "Logged in", token });
  } else {
    res.status(403).json({
      message: "Incorrrect credentials",
    });
  }
});


app.post("/api/v1/content", (req, res) => {
  
});
app.get("/api/v1/content", (req, res) => {});
app.delete("/api/v1/content", (req, res) => {});
app.post("/api/v1/brain/share", (req, res) => {});
app.get("/api/v1/brain/:shareLink", (req, res) => {});

app.listen(port, () => {
  console.log(`All`);
});

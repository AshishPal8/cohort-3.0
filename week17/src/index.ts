import { Client } from "pg";
import express from "express";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());

const pgClient = new Client(
  "postgresql://neondb_owner:AgOjZ17whIdn@ep-autumn-paper-a5ulbmf6.us-east-2.aws.neon.tech/neondb?sslmode=require"
);

pgClient.connect();

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const insertQuery = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`;

    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await pgClient.query(insertQuery, [
      name,
      email,
      hashedPassword,
    ]);

    res.status(201).json({ message: "signup successful" });
  } catch (error) {
    console.log(error);
  }
});

app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pgClient.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    const user = result.rows[0];
    const hashedPassword = await bcrypt.compare(password, user.password);

    if (!hashedPassword) {
      return res.json("Invalid password");
    }

    res.status(201).json({
      message: "signin successful",
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, () => {
  console.log("App is listen on port 3000");
});

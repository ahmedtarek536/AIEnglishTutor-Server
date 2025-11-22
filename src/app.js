require("dotenv").config();
const express = require("express");

const prisma = require("./prismaClient");

const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  const { name, email } = req.body;
  let { hobbies } = req.body;

  // Normalize hobbies: accept JSON string or object/array, default to empty array
  if (typeof hobbies === "string") {
    try {
      hobbies = JSON.parse(hobbies);
    } catch (e) {
      return res.status(400).json({ error: "Invalid JSON for hobbies" });
    }
  }

  if (hobbies === undefined) {
    hobbies = [];
  }

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: "`name` and `email` are required" });
  }

  try {
    const newUser = await prisma.user.create({
      data: { name, email, hobbies },
    });
    return res.status(201).json(newUser);
  } catch (error) {
    // Prisma validation errors often mean bad input; return readable message
    if (error && error.name === "PrismaClientValidationError") {
      return res.status(400).json({ error: error.message });
    }
    return res
      .status(500)
      .json({ error: "Error creating user", message: error?.message });
  }
});

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();
  return res.json({
    message: "Welcome to the AI English Tutor API!",
    data: data,
  });
});

module.exports = app;

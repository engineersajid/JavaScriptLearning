import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());
app.use(cors());

// --- MongoDB Connection ---
// <db_password> er jaygay apnar password boshaben
const mongoURI =
  "mongodb+srv://sajid:Sajid1122@cluster0.cs3flty.mongodb.net/auth_db?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI)
  .then(() => console.log("Database Connected! ✅"))
  .catch((err) => console.log("DB Error: ", err));

// --- User Schema & Model ---
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);

// --- Register API ---
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    res.status(400).json({ error: "Registration failed!" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000 🚀"));

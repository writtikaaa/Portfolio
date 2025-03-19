import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import portfolioRoute from "./routes/portfolioRoute.js"; // Ensure .js extension

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // Change this to match your frontend URL
  methods: "POST",
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/v1/portfolio", portfolioRoute);

// Port configuration
const PORT = process.env.PORT ;

// Start server
app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});

export default app;

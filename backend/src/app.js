// Express framework
import express from "express";

// Routes
import taskRoutes from "./router/tasks.routes.js";
import authRoutes from "./router/auth.routes.js";

// Libraries
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

// Create an Express application
const app = express();

// Middleware for logs
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define a route for the root URL
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Project!" });
});

// Mount routes
app.use("/api", taskRoutes);
app.use("/api", authRoutes);

// Middleware for error for handling internal server errors
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;

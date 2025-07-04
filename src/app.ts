import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { registerRoutes } from "./app/api";

const app: Application = express();

app.use(cors({
  origin:["http://localhost:3000"],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Status route
app.get("/status", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Database connected successfully",
  });
});

registerRoutes(app)
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "!Ops api not found",
  });
});

export default app;

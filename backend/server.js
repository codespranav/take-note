import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./db/db.js";
import AuthRoute from "./routes/AuthRoute.js";
import Note_Route from "./routes/Note_Route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", AuthRoute);
app.use("/api/note", Note_Route);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`\napp is listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

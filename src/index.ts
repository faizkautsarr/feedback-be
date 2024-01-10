import express, { Request, Response } from "express";
import Feedback from "./models/feedback";

const app = express();
const port = 7777;
let feedbackData: Feedback[] = [];

app.use(express.json());

app.get("/", (req, res) => {
  const sampleResponse = {
    success: true,
    message: "Welcome to the Feedback API",
    data: "author, faiz k.",
  };

  res.status(200).json(sampleResponse);
});

app.post("/api/feedback", (req: Request, res: Response) => {
  try {
    // Validate and extract feedback data from the request body
    const { name, petName, rating, comment } = req.body as Feedback;

    // Validate required fields
    if (!name || !petName || !rating) {
      throw new Error(
        "Incomplete data. Please provide name, petName, and rating."
      );
    }

    // Validate rating is a number between 1 and 5
    if (typeof rating !== "number" || rating < 1 || rating > 5) {
      throw new Error(
        "Invalid rating. Please provide a number between 1 and 5."
      );
    }

    // Store feedback in memory
    const newFeedback: Feedback = { name, petName, rating, comment };
    feedbackData.push(newFeedback);

    // Send success response
    res.status(201).json({
      success: true,
      message: "Feedback received and stored successfully.",
      data: newFeedback,
    });
  } catch (error: any) {
    // Handle errors
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Failed to process feedback. Please check your input.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/api/feedback", (req: Request, res: Response) => {
  try {
    // Send the feedback data in JSON format
    res.status(200).json({
      success: true,
      message: "Feedback data retrieved successfully.",
      data: feedbackData,
    });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve feedback data.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

// change to your network ip, make sure your server and client run on same network to test it locally
app.listen(port, "192.168.1.2", () => {
  console.log(`Server is running on http://192.168.1.2:${port}`);
});

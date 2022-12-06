import Quiz from "../../../models/quiz.js";
import dbConnect from "../../../config/dbConnect";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method) {
    case "GET":
      dbConnect();
      try {
        const quizes = await Quiz.find({});
        res.status(200).json(quizes);
      } catch (error) {
        res.status(500).json({ msg: "Something's wrong" });
      }
      break;
    case "POST":
      dbConnect();
      try {
        const { title, fullMarks, timelimit, startedAt, endAt } = req.body;
        const newQuiz = new Quiz({
          title,
          fullMarks,
          timelimit,
          startedAt,
          endAt,
        });
        await newQuiz.save();
        res.status(200).json({ msg: "success" });
      } catch (error) {
        res.status(500).json({ msg: "wrong" });
      }
      break;
    default:
      break;
  }
}

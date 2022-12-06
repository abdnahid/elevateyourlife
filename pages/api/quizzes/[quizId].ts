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
        const quiz = await Quiz.findById(req.query.quizId);
        res.status(200).json(quiz);
      } catch (error) {
        res.status(500).json({ msg: "Something's wrong" });
      }
      break;
    case "PATCH":
      dbConnect();
      try {
        const { startedAt, endAt } = req.body;
        await Quiz.updateOne({ _id: req.query.quizId }, { startedAt, endAt });
        res.status(200).json({ msg: "success saving started and end" });
      } catch (error) {
        res.status(500).json({ msg: "wrong" });
      }
      break;
    default:
      break;
  }
}

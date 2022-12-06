import Link from "next/link";
import { QuizDetails } from "../../types/types";

interface QuizDataType {
  quizData: QuizDetails;
}

const QuizItem = (props: QuizDataType) => {
  const { _id, title, fullMarks, timelimit } = props.quizData;
  return (
    <div className="p-2 shadow-md shadow-dark rounded-md">
      <h2>{title}</h2>
      <p>Full Marks: {fullMarks}</p>
      <Link href={`/quizzes/${_id}`}>Take the test</Link>
    </div>
  );
};

export default QuizItem;

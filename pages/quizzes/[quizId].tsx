import axios from "axios";
import { useRouter } from "next/router";
import Countdown from "../../components/Quiz/Countdown";
import { QuizDetails } from "../../types/types";

const QuizId = (props: QuizDetails) => {
  const router = useRouter();
  if (props.startedAt === null) {
    axios.patch(`http://localhost:3000/api/quizzes/${router.query.quizId}`, {
      startedAt: Date.now(),
      endAt: Date.now() + props.timelimit,
    });
  }
  let remTime: number;
  if (props.endAt) {
    const modDate = new Date(props.endAt);
    remTime = modDate.getTime() - Date.now();
  } else {
    remTime = props.timelimit;
  }
  return (
    <div>
      <h2>{props.title}</h2>
      <Countdown timelimit={remTime} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { data } = await axios.get(
    `http://localhost:3000/api/quizzes/${context.params.quizId}`
  );
  return {
    props: data, // will be passed to the page component as props
  };
}

export default QuizId;

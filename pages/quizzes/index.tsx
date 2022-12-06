import axios from "axios";
import QuizItem from "../../components/Quiz/QuizItem";
import { QuizDetails } from "../../types/types";

interface QuizPropType {
  data: QuizDetails[];
}
const Quiz = (props: QuizPropType) => {
  return (
    <section className="py-24">
      <h2>All quizes</h2>
      <div className="flex items-center gap-2">
        {props.data.map((item: any) => (
          <QuizItem key={item._id} quizData={item} />
        ))}
      </div>
    </section>
  );
};

export async function getServerSideProps(context: any) {
  const { data } = await axios.get("http://localhost:3000/api/quizzes");
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Quiz;

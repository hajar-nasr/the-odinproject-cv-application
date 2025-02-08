import { useCVContext } from "../store/hooks";

const Summary = () => {
  const {
    cv: { summary },
  } = useCVContext()!;

  return (
    <div>
      <p>{summary.title}</p>
      <p>{summary.content}</p>
    </div>
  );
};

export default Summary;

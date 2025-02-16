import { useCVContext } from "../store/hooks";

const Summary = () => {
  const {
    cv: { summary },
  } = useCVContext()!;

  return (
    <div className="resume-section">
      <p className="section-title">{summary.title}</p>
      <p>{summary.content}</p>
    </div>
  );
};

export default Summary;

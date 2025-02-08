import { FormEvent, useState } from "react";
import { useCVContext } from "../../store/hooks";
import { ACTIONS_TYPES } from "../../store/types";

const SummaryForm = () => {
  const { dispatch } = useCVContext()!;

  const [summary, setSummary] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS_TYPES.EDIT_SUMMARY,
      payload: summary,
    });
  };

  return (
    <div>
      <p>Edit Summary</p>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => {
            setSummary(e.target.value);
          }}
          placeholder="Enter Summary"
          value={summary}
        ></textarea>
        <button type="submit" disabled={!summary}>
          Edit
        </button>
      </form>
    </div>
  );
};

export default SummaryForm;

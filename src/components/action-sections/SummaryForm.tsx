import { FormEvent, useState } from "react";
import { useCVContext } from "../../store/hooks";
import { ACTIONS_TYPES } from "../../store/types";
import FormContainer from "./FormContainer";

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
    <FormContainer
      title="Edit Summary"
      onSubmit={handleSubmit}
      isSumbitEnabled={!!summary}
    >
      <label className="form-label">
        <span>Summary</span>
        <textarea
          onChange={(e) => {
            setSummary(e.target.value);
          }}
          placeholder="Summarize your professional experience and key skills"
          value={summary}
          rows={5}
          className="form-input"
        ></textarea>
      </label>
    </FormContainer>
  );
};

export default SummaryForm;

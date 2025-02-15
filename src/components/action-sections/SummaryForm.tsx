import { FormEvent, ChangeEvent } from "react";
import { useCVContext } from "../../store/hooks";
import { ACTIONS_TYPES, SidebarFormChangeEventProps } from "../../store/types";
import FormContainer from "./FormContainer";

const SummaryForm = ({
  summary,
  handleChange,
}: {
  summary: string;
  handleChange: ({ event, sidebarFormId }: SidebarFormChangeEventProps) => void;
}) => {
  const { dispatch } = useCVContext()!;

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
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
            handleChange({
              event,
              sidebarFormId: "summary",
            });
          }}
          placeholder="Summarize your professional experience and key skills"
          value={summary}
          rows={5}
          className="form-input"
          name="summary"
        ></textarea>
      </label>
    </FormContainer>
  );
};

export default SummaryForm;

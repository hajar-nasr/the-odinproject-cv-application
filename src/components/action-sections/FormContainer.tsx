import { FormEvent, ReactNode } from "react";

interface Props {
  title: string;
  onSubmit: (e: FormEvent) => void;
  isSumbitEnabled: boolean;
  children: ReactNode;
}

const FormContainer = ({
  title,
  onSubmit,
  isSumbitEnabled,
  children,
}: Props) => {
  return (
    <div className="form-section">
      <p className="form-title">{title}</p>

      <form onSubmit={onSubmit} className="form">
        {children}
        <button
          type="submit"
          disabled={!isSumbitEnabled}
          className="form-submit"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default FormContainer;

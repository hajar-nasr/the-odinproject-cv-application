import { useCVContext } from "../store/hooks";

const Education = () => {
  const {
    cv: { education },
  } = useCVContext()!;

  return (
    <div className="resume-section">
      <p className="section-title">Education</p>
      <div className="education">
        {education.items.map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.fieldOfStudy} - {item.school}
              </p>
              <p>{item.degree}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;

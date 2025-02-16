import { useCVContext } from "../store/hooks";
import { LocationIcon } from "./Icons";
import Markdown from "react-markdown";

const Experience = () => {
  const {
    cv: { experience },
  } = useCVContext()!;

  const formatDate = (input: string) => {
    const date = new Date(input);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1);

    return `${month}/${year}`;
  };

  return (
    <div className="resume-section">
      <p className="section-title">Experience</p>
      <div className="experiences">
        {experience.items.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex-between">
                <div>
                  <p className="job-title">{item.title}</p>
                  <p className="company-name">{item.company}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span>
                    {formatDate(item.startDate!)} -{" "}
                    {item.endDate ? formatDate(item.endDate) : "Present"}
                  </span>
                  <div>
                    <LocationIcon />
                    <span style={{ paddingLeft: "4px" }}>{item.location}</span>
                  </div>
                </div>
              </div>
              <Markdown className="markdown">{item.description}</Markdown>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

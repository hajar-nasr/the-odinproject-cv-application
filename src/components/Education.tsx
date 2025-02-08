import { useCVContext } from "../store/hooks";

const Education = () => {
  const {
    cv: { education },
  } = useCVContext()!;

  return (
    <div>
      <p>{education.title}</p>
      <div>
        {education.items.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.degree}</p>
              <p>{item.school}</p>
              <hr />
              {item.startYear} - {item.endYear}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;

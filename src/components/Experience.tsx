import { useCVContext } from "../store/hooks";

const Experience = () => {
  const {
    cv: { experience },
  } = useCVContext()!;

  return (
    <div>
      <p>Experience</p>
      <div>
        {experience.items.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.company}</p>
              <hr />
              {item.description}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

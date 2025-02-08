import { State } from "./types";

const initalState: State = {
  profile: {
    name: "Hajar Nasreddin Moustafa",
    email: "hajarnam@gmail.com",
    linkedIn: "https://www.linkedin.com/in/hajar-nasr",
  },
  summary: {
    title: "Summary",
    content: "",
  },
  education: [
    {
      school: "Assuit Univeristy, Egypt",
      degree: "Bachelor",
      fieldOfStudy: "Computer Science",
      startYear: "",
      endYear: "",
    },
  ],
  experience: [
    {
      title: "",
      company: "",
      location: "",
      startYear: "",
      endYear: "",
      description: "",
    },
  ],
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
};

export default initalState;

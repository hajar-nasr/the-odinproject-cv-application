import { State } from "./types";

const initalState: State = {
  profile: {
    name: "Hajar Nasreddin Moustafa",
    email: "hajarnam@gmail.com",
    linkedIn: "https://www.linkedin.com/in/hajar-nasr",
  },
  summary: {
    title: "Summary",
    content: `Results-driven Software Engineer with 3֡ years of experience building responsive,
user-centric web applications using React, Next.js, and modern web technologies.
Skilled in collaborating with cross-functional teams, adapting to evolving requirements,
and delivering high-quality solutions. Passionate about contributing to projects that
create meaningful impact.`,
  },
  experience: {
    items: [
      {
        title: "",
        company: "",
        location: "",
        startYear: "",
        endYear: "",
        description: "",
        id: "exp_1",
      },
    ],
  },
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  education: {
    items: [
      {
        id: "edu_1",
        school: "The Odin Project",
        degree: "Web Developer",
        fieldOfStudy: "Web Development",
        graduationYear: "",
      },
    ],
  },
};

export default initalState;

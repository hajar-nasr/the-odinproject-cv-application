import { State, SidebarFormsState } from "./types";

const initalState: State = {
  profile: {
    name: "Hajar Nasreddin Moustafa",
    email: "hajarnam@gmail.com",
    linkedIn: "https://www.linkedin.com/in/hajar-nasr",
  },
  summary: {
    content: `Results-driven Software Engineer with 3֡ years of experience building responsive,
user-centric web applications using React, Next.js, and modern web technologies.
Skilled in collaborating with cross-functional teams, adapting to evolving requirements,
and delivering high-quality solutions. Passionate about contributing to projects that
create meaningful impact.`,
  },
  experience: {
    items: [
      {
        title: "Web Developer",
        company: "Fabulous",
        location: "Remote",
        startDate: "2021-12-13",
        description: `- Designed and implemented a flexible onboarding configuration system for multiple apps using **Next.js, Airtable, Firebase,** and **JSON-based remote configurations**, enabling efficient customization of themes, content, and visuals.  
- **User Subscription Portal** – Built a user portal with **Vue (Nuxt.js), SASS,** and **Firebase** to manage active subscriptions, offering an intuitive interface for users to view, modify, and control their subscription details.  
- **AI-Powered Life Coaching Chatbot** – Developed a chatbot application using **Next.js, Vercel’s AI SDK,** and **TailwindCSS**, providing users with personalized and conversational coaching experiences.  
- **Custom API & Subscription Management** – Built and integrated APIs to handle subscription management, leveraging **Chargebee** for subscription billing and payment processing.  
`,
        id: "exp_1",
      },
      {
        title: "Web Developer",
        company: "WeVenture.global",
        location: "Remote",
        startDate: "2021-04-01",
        endDate: "2021-12-01",
        description: `- **Payment System Integration** – Integrated payment systems using **Stripe** and **React Stripe**, leveraging **Firebase Analytics** to track payment data, ensure efficient transaction processing, and enable data-driven insights for better decision-making.  
- **Secure User Authentication** – Implemented secure authentication using leading providers such as **Google, Facebook,** and **Apple** to enhance user access and security.  
`,
        id: "exp_2",
      },
    ],
  },
  skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  education: {
    items: [
      {
        id: "edu_1",
        school: "The Odin Project",
        degree: "",
        fieldOfStudy: "Web Development",
      },
    ],
  },
};

export const formsEmptyState: SidebarFormsState = {
  education: {
    id: "",
    school: "",
    degree: "",
    fieldOfStudy: "",
  },
  experience: {
    id: "",
    title: "",
    company: "",
    location: "",
    startDate: "",
    description: "",
  },
  profile: {
    name: "",
    email: "",
    linkedIn: "",
  },
  summary: "",
  skills: [],
};

export default initalState;

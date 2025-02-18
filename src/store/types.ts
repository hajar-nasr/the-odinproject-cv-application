import { ChangeEvent } from "react";

export interface Profile {
  name: string;
  email: string;
  linkedIn: string;
}

export interface Summary {
  content: string;
}

export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
};

export interface Experience {
  items: ExperienceItem[];
}

export type EducationItem = {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
};

export interface Education {
  items: EducationItem[];
}

export interface State {
  profile: Profile;
  summary: Summary;
  experience: Experience;
  skills: string[];
  education: Education;
}

export interface SidebarFormsState {
  experience: ExperienceItem;
  education: EducationItem;
  profile: Profile;
  summary: string;
  skills: string[];
}

export type SidebarFormId = keyof SidebarFormsState;

export type SidebarFormChangeEventProps = {
  event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
  sidebarFormId: SidebarFormId;
};

export enum ACTIONS_TYPES {
  EDIT_PROFILE = "EDIT_PROFILE",
  EDIT_SUMMARY = "EDIT_SUMMARY",
  EDIT_EDUCATION = "EDIT_EDUCATION",
  EDIT_EXPERIENCE = "EDIT_EXPERIENCE",
  RESET_RESUME = "RESET_RESUME",
}

export interface Action {
  type: ACTIONS_TYPES;
  payload?: string | Profile | EducationItem | ExperienceItem;
}

export interface CVStateContextType {
  cv: State;
  dispatch: (action: Action) => void;
}

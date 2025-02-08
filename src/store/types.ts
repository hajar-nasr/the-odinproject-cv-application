export interface Profile {
  name: string;
  email: string;
  linkedIn: string;
}

export interface Summary {
  title: string;
  content: string;
}

export interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  startYear: string;
  endYear: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startYear: string;
  endYear: string;
  description: string;
}

export interface State {
  profile: Profile;
  summary: Summary;
  education: Education[];
  experience: Experience[];
  skills: string[];
}

export enum ACTIONS_TYPES {
  EDIT_PROFILE = "EDIT_PROFILE",
  EDIT_SUMMARY = "EDIT_SUMMARY",
}

export interface Action {
  type: ACTIONS_TYPES;
  payload: string | Profile;
}

export interface CVStateContextType {
  cv: State;
  dispatch: (action: Action) => void;
}

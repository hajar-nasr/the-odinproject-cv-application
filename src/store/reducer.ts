import {
  ACTIONS_TYPES,
  State,
  Action,
  Profile,
  EducationItem,
  ExperienceItem,
} from "./types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS_TYPES.EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload as Profile,
      };
    case ACTIONS_TYPES.EDIT_SUMMARY:
      return {
        ...state,
        summary: {
          ...state.summary,
          content: action.payload as string,
        },
      };
    case ACTIONS_TYPES.EDIT_EDUCATION:
      return {
        ...state,
        education: {
          items: [...state.education.items, action.payload as EducationItem],
        },
      };
    case ACTIONS_TYPES.EDIT_EXPERIENCE:
      return {
        ...state,
        experience: {
          items: [...state.experience.items, action.payload as ExperienceItem],
        },
      };
    case ACTIONS_TYPES.RESET_RESUME:
      return {
        profile: {
          name: "",
          linkedIn: "",
          email: "",
        },
        education: {
          items: [],
        },
        experience: {
          items: [],
        },
        skills: [],
        summary: {
          content: "",
        },
      };
    default:
      return state;
  }
};

export default reducer;

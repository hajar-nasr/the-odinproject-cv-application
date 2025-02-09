import { ACTIONS_TYPES, State, Action, Profile, EducationItem } from "./types";

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
    default:
      return state;
  }
};

export default reducer;

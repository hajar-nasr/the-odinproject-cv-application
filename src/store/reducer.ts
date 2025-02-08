import { ACTIONS_TYPES, State, Action, Profile } from "./types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS_TYPES.EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload as Profile,
      };
    case ACTIONS_TYPES.EDIT_SUMMARY: {
      return {
        ...state,
        summary: {
          ...state.summary,
          content: action.payload as string,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;

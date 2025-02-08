import { ACTIONS_TYPES, State, Action } from "./types";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS_TYPES.EDIT_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

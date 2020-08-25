import { HISTORY } from "../actions/types";

const initialState = {
  History: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HISTORY:
      return {
        ...state,
        History: action.payload,
      };

    default:
      return state;
  }
}

import { PAYLOAD } from "../actions/types";

const initialState = {
  Payload: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PAYLOAD:
      return {
        ...state,
        Payload: action.payload,
      };
    default:
      return state;
  }
}

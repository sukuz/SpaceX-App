import { HISTORY, PAYLOAD } from "./types";

const fetchData = (path) => {
  if (path === "/Payload") {
    return (dispatch) => {
      fetch(`https://api.spacexdata.com/v3/payloads`)
        .then((res) => res.json())
        .then((payloadSpacex) =>
          dispatch({ type: PAYLOAD, payload: payloadSpacex })
        );
    };
  }

  return (dispatch) => {
    fetch(`https://api.spacexdata.com/v3/history`)
      .then((res) => res.json())
      .then((history) => dispatch({ type: HISTORY, payload: history }));
  };
};
export default fetchData;

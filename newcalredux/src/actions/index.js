import axios from "axios";

export const FETCH_DAYS_START = "FETCH_DAYS_START";
export const FETCH_DAYS_SUCCESS = "FETCH_DAYS_SUCCESS";
export const FETCH_DAYS_FAIL = "FETCH_DAYS_FAIL";

export const fetchDays = (url) => (dispatch) => {
  dispatch({ type: FETCH_DAYS_START });
  axios
    .get(url)
    .then((response) =>
      dispatch({ type: FETCH_DAYS_SUCCESS, payload: response.data })
    )
    .catch((err) => console.log("error in axios get: ", err));
};

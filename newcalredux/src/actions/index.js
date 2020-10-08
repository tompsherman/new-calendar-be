export const FETCH_DAYS_START = "FETCH_DAYS_START";
export const FETCH_DAYS_SUCCESS = "FETCH_DAYS_SUCCESS";
export const FETCH_DAYS_FAIL = "FETCH_DAYS_FAIL";

export const fetchDays = () => (dispatch) => {
  dispatch({ type: FETCH_DAYS_START });
};

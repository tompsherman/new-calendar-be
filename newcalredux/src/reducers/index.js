import {
  FETCH_DAYS_START,
  FETCH_DAYS_FAIL,
  FETCH_DAYS_SUCCESS,
} from "../actions";

const initialState = {
  days: [],
  isLoading: false,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DAYS_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case FETCH_DAYS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;

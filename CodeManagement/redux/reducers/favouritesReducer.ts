
import { ADD_TO_FAVOURITES } from "../actions/favouritesActions";

const initialState = {
  favourites: [],
  loading: false,
  error: null,
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return { ...state, favourites: action.payload, loading: true, error: null };
    default:
      return state;
  }
};

export default favouritesReducer;

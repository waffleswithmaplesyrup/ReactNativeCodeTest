import { FETCH_POPULAR_MOVIES_FAILURE, FETCH_POPULAR_MOVIES_REQUEST, FETCH_POPULAR_MOVIES_SUCCESS } from "../actions/popularMovieActions";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const popularMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
      
    case FETCH_POPULAR_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
      
    case FETCH_POPULAR_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default popularMovieReducer;

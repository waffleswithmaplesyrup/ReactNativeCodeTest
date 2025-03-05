import { FETCH_UPCOMING_MOVIES_FAILURE, FETCH_UPCOMING_MOVIES_REQUEST, FETCH_UPCOMING_MOVIES_SUCCESS } from "../actions/upcomingMovieActions";

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const upcomingMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES_REQUEST:
      return { ...state, loading: true, error: null };
      
    case FETCH_UPCOMING_MOVIES_SUCCESS:
      return { ...state, loading: false, movies: action.payload };
      
    case FETCH_UPCOMING_MOVIES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default upcomingMovieReducer;

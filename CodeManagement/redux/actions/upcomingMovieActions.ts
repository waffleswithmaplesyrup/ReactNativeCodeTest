
export const FETCH_UPCOMING_MOVIES_REQUEST = "FETCH_UPCOMING_MOVIES_REQUEST";
export const FETCH_UPCOMING_MOVIES_SUCCESS = "FETCH_UPCOMING_MOVIES_SUCCESS";
export const FETCH_UPCOMING_MOVIES_FAILURE = "FETCH_UPCOMING_MOVIES_FAILURE";

export const fetchUpcomingMoviesRequest = () => ({
  type: FETCH_UPCOMING_MOVIES_REQUEST
});

export const fetchUpcomingMoviesSuccess = (movies) => ({
  type: FETCH_UPCOMING_MOVIES_SUCCESS,
  payload: movies
});

export const fetchUpcomingMoviesFailure = (error) => ({
  type: FETCH_UPCOMING_MOVIES_FAILURE,
  payload: error
});
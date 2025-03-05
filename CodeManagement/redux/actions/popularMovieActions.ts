
export const FETCH_POPULAR_MOVIES_REQUEST = "FETCH_POPULAR_MOVIES_REQUEST";
export const FETCH_POPULAR_MOVIES_SUCCESS = "FETCH_POPULAR_MOVIES_SUCCESS";
export const FETCH_POPULAR_MOVIES_FAILURE = "FETCH_POPULAR_MOVIES_FAILURE";

export const fetchPopularMoviesRequest = () => ({
  type: FETCH_POPULAR_MOVIES_REQUEST
});

export const fetchPopularMoviesSuccess = (movies) => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies
});

export const fetchPopularMoviesFailure = (error) => ({
  type: FETCH_POPULAR_MOVIES_FAILURE,
  payload: error
});
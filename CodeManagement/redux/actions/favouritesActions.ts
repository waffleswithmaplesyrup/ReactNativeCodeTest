
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";

export const addToFavourites = favourite => dispatch => {
  dispatch({
    type: ADD_TO_FAVOURITES,
    payload: favourite,
  });
}
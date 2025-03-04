
export const SET_CONCERNS_LIST = "SET_CONCERNS_LIST";
export const SET_DIETS_LIST = "SET_DIETS_LIST";
export const SET_DAILY_SUN_EXPOSURE = "SET_DAILY_SUN_EXPOSURE";
export const SET_DOES_SMOKE = "SET_DOES_SMOKE";
export const SET_ALCOHOL = "SET_ALCOHOL";
export const SET_ALLERGIES_LIST = "SET_ALLERGIES_LIST";

export const setConcernsList = concern => dispatch => {
  dispatch({
    type: SET_CONCERNS_LIST,
    payload: concern,
  });
}

export const setDietsList = diet => dispatch => {
  dispatch({
    type: SET_DIETS_LIST,
    payload: diet,
  });
}

export const setAllergiesList = allergy => dispatch => {
  dispatch({
    type: SET_ALLERGIES_LIST,
    payload: allergy,
  });
}

export const setAlcohol = alcohol => dispatch => {
  dispatch({
    type: SET_ALCOHOL,
    payload: alcohol,
  });
}

export const setDoesSmoke = doesSmoke => dispatch => {
  dispatch({
    type: SET_DOES_SMOKE,
    payload: doesSmoke,
  });
}

export const setDailySunExposure = sunExposure => dispatch => {
  dispatch({
    type: SET_DAILY_SUN_EXPOSURE,
    payload: sunExposure,
  });
}
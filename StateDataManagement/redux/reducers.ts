import { SET_DIETS_LIST, SET_CONCERNS_LIST, SET_DAILY_SUN_EXPOSURE, SET_DOES_SMOKE, SET_ALCOHOL, SET_ALLERGIES_LIST } from "./actions";

const initialState = {
  health_concerns: [],
  diets: [],
  allergies: [],
  alcohol: "",
  does_smoke: "",
  daily_sun_exposure: "",
}

function formReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONCERNS_LIST:
      return { ...state, health_concerns: action.payload };
    case SET_DIETS_LIST:
      return { ...state, diets: action.payload };
    case SET_ALLERGIES_LIST:
      return { ...state, allergies: action.payload };
    case SET_ALCOHOL:
      return { ...state, alcohol: action.payload };
    case SET_DOES_SMOKE:
      return { ...state, does_smoke: action.payload };
    case SET_DAILY_SUN_EXPOSURE:
      return { ...state, daily_sun_exposure: action.payload };
    default:
      return state;
  }
}

export default formReducer;
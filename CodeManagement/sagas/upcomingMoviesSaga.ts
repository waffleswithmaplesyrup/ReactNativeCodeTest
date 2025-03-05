import { call, put, takeEvery } from "redux-saga/effects";
import { getUpcomingMoviesService } from "../API/movieService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FETCH_UPCOMING_MOVIES_REQUEST, fetchUpcomingMoviesFailure, fetchUpcomingMoviesSuccess } from "../redux/actions/upcomingMovieActions";

function* fetchMoviesSaga() {
  try {
    // First, check offline cache
    const cachedMovies = yield call(AsyncStorage.getItem, "upcoming");
    if (cachedMovies) {
      yield put(fetchUpcomingMoviesSuccess(JSON.parse(cachedMovies)));
    }

    // Fetch from API
    const movies = yield call(getUpcomingMoviesService);
    
    // Save to AsyncStorage for offline support
    yield call(AsyncStorage.setItem, "upcoming", JSON.stringify(movies));
    
    yield put(fetchUpcomingMoviesSuccess(movies));
    
  } catch (error) {
    yield put(fetchUpcomingMoviesFailure("Failed to fetch movies. Please try again."));
  }
}

// Watcher saga
export default function* watchFetchUpcomingMovies() {
  yield takeEvery(FETCH_UPCOMING_MOVIES_REQUEST, fetchMoviesSaga);
}
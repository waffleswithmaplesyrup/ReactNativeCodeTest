
import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, takeEvery } from "redux-saga/effects";
import { getPopularMoviesService } from "../API/movieService";
import { FETCH_POPULAR_MOVIES_REQUEST, fetchPopularMoviesFailure, fetchPopularMoviesSuccess } from "../redux/actions/popularMovieActions";

function* fetchMoviesSaga() {
  try {
    // First, check offline cache
    const cachedMovies = yield call(AsyncStorage.getItem, "popular");
    if (cachedMovies) {
      yield put(fetchPopularMoviesSuccess(JSON.parse(cachedMovies)));
    }

    // Fetch from API
    const movies = yield call(getPopularMoviesService);
    
    // Save to AsyncStorage for offline support
    yield call(AsyncStorage.setItem, "popular", JSON.stringify(movies));
    
    yield put(fetchPopularMoviesSuccess(movies));
    
  } catch (error) {
    yield put(fetchPopularMoviesFailure("Failed to fetch movies. Please try again."));
  }
}

// Watcher saga
export default function* watchFetchPopularMovies() {
  yield takeEvery(FETCH_POPULAR_MOVIES_REQUEST, fetchMoviesSaga);
}
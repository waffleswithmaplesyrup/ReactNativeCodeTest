import { all, fork } from "redux-saga/effects";
import watchFetchUpcomingMovies from "./upcomingMoviesSaga";
import watchFetchPopularMovies from "./popularMoviesSaga";

export default function* rootSaga() {
  yield all([
    fork(watchFetchUpcomingMovies),
    fork(watchFetchPopularMovies)
  ]);
}
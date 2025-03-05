import { getPopularMoviesApi, getUpcomingMoviesApi } from "./movieApi";

export async function getUpcomingMoviesService() {
  const data = await getUpcomingMoviesApi();
  return data.data.results;
}

export async function getPopularMoviesService() {
  const data = await getPopularMoviesApi();
  return data.data.results;
}
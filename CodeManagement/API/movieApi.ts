
import axiosInstance from "./customAxios";

export function getUpcomingMoviesApi() {
  return axiosInstance.get("upcoming");
}

export function getPopularMoviesApi() {
  return axiosInstance.get("popular");
}
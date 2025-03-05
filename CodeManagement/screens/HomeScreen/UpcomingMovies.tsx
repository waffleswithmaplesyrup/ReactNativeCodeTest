import { FunctionComponent, useEffect } from "react";
import { ActivityIndicator, Button, ScrollView, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMoviesRequest } from "../../redux/actions/upcomingMovieActions";
import MovieCardComponent from "./MovieCardComponent";

const UpcomingMovies: FunctionComponent = () => {

  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.upcomingMovieReducer);

  useEffect(() => {
    dispatch(fetchUpcomingMoviesRequest());
  }, []);

  const retryFetch = () => {
    dispatch(fetchUpcomingMoviesRequest());
  };

  return (
    <>
      { loading && <ActivityIndicator size="large" color="#0000ff" /> }
          
      {error && (
        <View>
          <Text style={{ color: "red" }}>{error}</Text>
          <Button title="Retry" onPress={retryFetch} />
        </View>
      )}

      <Text
        style={{
          fontSize: 20,
          marginBottom: 10,
        }}
        >Upcoming Movies</Text>
      <ScrollView
        horizontal={true}
        style={{
          marginBottom: 10,
        }}
      >
        {
          movies?.map(movie => <MovieCardComponent key={movie.id} movie={movie} />)
        }
      </ScrollView>
    </>
  )
}

export default UpcomingMovies

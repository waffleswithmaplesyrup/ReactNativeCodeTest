import { FunctionComponent, useEffect } from "react";
import { ActivityIndicator, Button, ScrollView, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import MovieCardComponent from "./MovieCardComponent";
import { fetchPopularMoviesRequest } from "../../redux/actions/popularMovieActions";

const PopularMovies: FunctionComponent = () => {

  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector(state => state.popularMovieReducer);

  useEffect(() => {
    dispatch(fetchPopularMoviesRequest());
  }, []);

  const retryFetch = () => {
    dispatch(fetchPopularMoviesRequest());
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
        >Popular Movies</Text>
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

export default PopularMovies

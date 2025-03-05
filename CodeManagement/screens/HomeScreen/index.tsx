import { FunctionComponent } from "react"
import { Button, View } from "react-native"
import UpcomingMovies from "./UpcomingMovies";
import PopularMovies from "./PopularMovies";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen: FunctionComponent = () => {

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  return (
    <View>

      <UpcomingMovies />

      <PopularMovies />

      <Button title="Clear Async Storage" onPress={clearAsyncStorage} />

    </View>
  )
}

export default HomeScreen

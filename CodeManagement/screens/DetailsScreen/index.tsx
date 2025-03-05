import { FunctionComponent } from "react"
import { Image, ScrollView, Text, View } from "react-native"
import FavouritesComponent from "../../components/FavouritesComponent";

const DetailsScreen: FunctionComponent = ({ route }) => {

  const { movie } = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
      >
        <Image
          style={{
            width: 400,
            height: 600,
          }}
          source={{
            uri: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`,
          }}
        />
        {/* <Text>{JSON.stringify(movie)}</Text> */}
        <FavouritesComponent id={movie.id} />
        <Text>{movie.title} ({movie.release_date.substring(0, 4)})</Text>
        <Text>Overview</Text>
        <Text>{movie.overview}</Text>
      </ScrollView>
    </View>
  )
}

export default DetailsScreen

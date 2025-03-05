import { useNavigation } from "@react-navigation/native";
import { FunctionComponent } from "react"
import { Image, Text, TouchableOpacity } from "react-native"
import FavouritesComponent from "../../components/FavouritesComponent";

interface ComponentProps {
  movie: {
    id: Number;
    title: String;
    poster_path: String;
  };
};

const MovieCardComponent: FunctionComponent<ComponentProps> = (props) => {
  
  const navigate = useNavigation();

  const handleNavigate = () => {
    navigate.navigate("Details", {
      movie: props.movie
    });
  };
  
  return (
    <TouchableOpacity
      onPress={handleNavigate}
    >
      <Image
        style={{
          width: 150,
          height: 200,
        }}
        source={{
          uri: `https://image.tmdb.org/t/p/w1280${props.movie.poster_path}`,
        }}
      />
      <Text>
        { props.movie.title }
      </Text>
      <FavouritesComponent id={props.movie.id} />
    </TouchableOpacity>
  )
}

export default MovieCardComponent

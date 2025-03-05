import { FunctionComponent, useEffect } from "react"
import { TouchableOpacity, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites } from "../redux/actions/favouritesActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ComponentProps {
  id: Number;
};

const FavouritesComponent: FunctionComponent<ComponentProps> = (props) => {

  const dispatch = useDispatch();
  const { favourites, loading, error } = useSelector(state => state.favouritesReducer);

  const handleAddToFavourites = async () => {

    if (favourites.includes(props.id)) {
      // remove from favourites
      const removedFromFav = favourites.filter(id => props.id != id);
      await AsyncStorage.setItem("favourites", JSON.stringify(removedFromFav));
      dispatch(addToFavourites(removedFromFav));
    } else {
      const addedToFav = [...favourites, props.id];
      await AsyncStorage.setItem("favourites", JSON.stringify(addedToFav));
      dispatch(addToFavourites(addedToFav));
    }

  };

  useEffect(() => {
    const fetchData = async () => {
      const cachedFavourites = await AsyncStorage.getItem("favourites");
      if (cachedFavourites) {
        dispatch(addToFavourites(JSON.parse(cachedFavourites)));
      }
    };
    fetchData();
  }, []);

  return (
    <View
      style={{
      }}
    >
      <TouchableOpacity
        onPress={handleAddToFavourites}
      >
        {
          favourites.includes(props.id) ?
          <FontAwesome name="bookmark" size={30} color="red" />
          :
          <FontAwesome name="bookmark-o" size={30} color="black" />
        }
      </TouchableOpacity>
    </View>
  )
}

export default FavouritesComponent

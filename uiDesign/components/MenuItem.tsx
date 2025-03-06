import { Image, Text, TouchableOpacity, View } from "react-native";
import { MenuItemsType } from "../data/MenuData";
import { useNavigation } from "@react-navigation/native";
import { animalInfoName } from "../App";

type Props = {
  item: MenuItemsType;
};

const MenuItem = ({ item }: Props) => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(animalInfoName);
  };

  return (
    <TouchableOpacity
      style={{
        alignItems: "center"
      }}
      onPress={handlePress}
    >
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: "100%",
          backgroundColor: "rgb(220, 220, 220)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={item.image} />
      </View>
      <Text
        style={{
          marginTop: 10,
        }}
      >{item.title}</Text>
    </TouchableOpacity>
  )
}

export default MenuItem

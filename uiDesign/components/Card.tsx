import { Image, Text, TouchableOpacity, View } from "react-native"
import { CardItemsType } from "../data/CardData";

type Props = {
  item: CardItemsType;
};

const Card = ({ item }: Props) => {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 150,
        flex: 1,
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "rgb(100, 100, 100)"
          }}
        >{item.title}</Text>
        <Image source={item.image} />
      </View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: item.title === "My e-tickets" ? "rgb(182, 182, 182)" : ""
        }}
      >{item.description}</Text>
      <Text
        style={{
          color: "tomato"
        }}
      >{item.action}</Text>
    </TouchableOpacity>
  )
}

export default Card

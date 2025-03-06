import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Slider from "../../components/Slider";

const AnimalInfoScreen = ({ route, navigation }) => {

  const { item } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Slider itemList={item.images} autoPlayOn={true} />
      <TouchableOpacity
        style={{
          position: "relative",
          left: 10,
          bottom: 200,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={require("../../assets/icons/Group 126.png")} />
      </TouchableOpacity>
      <View
        style={{
          paddingHorizontal: 20,
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            color: "rgb(100, 100, 100)",
            marginVertical: 10,
          }}
        >{item.location}</Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >{item.name}</Text>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: 5,
            borderRadius: 5,
            marginBottom: 10,
          }}
        >
          <Image source={require("../../assets/icons/Ellipse 19.png")} />
          <Text>{item.distance} away <Text style={{color: "tomato"}}>Map</Text></Text>
        </TouchableOpacity>
        <Text style={{
          fontSize: 15,
          letterSpacing: 1.2,
          color: "rgb(100, 100, 100)",
        }}>{item.description}</Text>
      </View>
    </SafeAreaView>
  )
}

export default AnimalInfoScreen

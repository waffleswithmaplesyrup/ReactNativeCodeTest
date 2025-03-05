import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Header"
import Slider from "../../components/Slider"
import { HeaderImageSlider, ShowsImageSlider } from "../../data/SliderData"
import { Text, View } from "react-native"


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <Header />
      
      <Slider itemList={HeaderImageSlider} autoPlayOn={true} />

      <View
        style={{
          marginHorizontal: 10,
          marginBottom: 10, 
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{
          fontSize: 20,
        }}>Upcoming Shows</Text>
        <Text style={{
          fontSize: 12,
          color: "rgb(225, 74, 47)"
        }}>View All</Text>
      </View>
      <Slider itemList={ShowsImageSlider} autoPlayOn={false} />
      

    </SafeAreaView>
  )
}

// TODO: image carrousel header
// TODO: buttons to navigate to: Map, Inhabitants, Shows, Shopping, Dine, Meet & Greets
// TODO: cards to view e-tickets, and park operation hours
// TODO: horizonatl scroll view that show cards of upcoming shows
// TODO: bottom navigation tabs: Home, Wallet, More

export default HomeScreen

import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Header"
import Slider from "../../components/Slider"
import { ImageSlider } from "../../data/SliderData"


const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <Header />
      
      <Slider itemList={ImageSlider} />
      

    </SafeAreaView>
  )
}

// TODO: image carrousel header
// TODO: buttons to navigate to: Map, Inhabitants, Shows, Shopping, Dine, Meet & Greets
// TODO: cards to view e-tickets, and park operation hours
// TODO: horizonatl scroll view that show cards of upcoming shows
// TODO: bottom navigation tabs: Home, Wallet, More

export default HomeScreen

import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import Header from "../../components/Header"
import Slider from "../../components/Slider"
import { HeaderImageSlider, ShowsImageSlider } from "../../data/SliderData"
import { Dimensions, ScrollView, Text, View } from "react-native"
import { CardItems } from "../../data/CardData"
import Card from "../../components/Card"

const { width } = Dimensions.get("screen");

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />

      <Header />
      
      <ScrollView>

        <Slider itemList={HeaderImageSlider} autoPlayOn={true} />

        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-around",
            gap: 20,
            // width: width, 
            padding: 20,
          }}
        >
        {
          CardItems?.map((item, index) => <Card key={index} item={item} />)
        }
        </View>

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
            color: "tomato"
          }}>View All</Text>
        </View>
        <Slider itemList={ShowsImageSlider} autoPlayOn={false} />
        
      </ScrollView>

    </SafeAreaView>
  )
}

// TODO: buttons to navigate to: Map, Inhabitants, Shows, Shopping, Dine, Meet & Greets
// TODO: cards to view e-tickets, and park operation hours

export default HomeScreen

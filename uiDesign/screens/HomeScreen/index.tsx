import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native"

// Data
import { HeaderImageSlider, ShowsImageSlider } from "../../data/SliderData"
import { CardItems } from "../../data/CardData"
import { MenuItems } from "../../data/MenuData"

// Components
import Header from "../../components/Header"
import Slider from "../../components/Slider"
import Card from "../../components/Card"
import MenuItem from "../../components/MenuItem"

const { height } = Dimensions.get("screen");

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingBottom: -35,
      }}
    >
      <StatusBar style="auto" />

      <Header />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Slider itemList={HeaderImageSlider} autoPlayOn={true} />

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20, 
            padding: 20,
          }}
        >
          {
            MenuItems?.map((item, index) => <MenuItem key={index} item={item}  />)
          }
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 20, 
            padding: 20,
          }}
        >
        {
          CardItems?.map((item, index) => <Card key={index} item={item} />)
        }
        </View>

        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 10, 
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{
            fontSize: 20,
          }}>Upcoming Shows</Text>
          <TouchableOpacity>
            <Text style={{
              fontSize: 12,
              color: "tomato"
            }}>View All</Text>
          </TouchableOpacity>
        </View>
        <Slider itemList={ShowsImageSlider} autoPlayOn={false} />
        
        <View style={{
          paddingBottom: 50
        }}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

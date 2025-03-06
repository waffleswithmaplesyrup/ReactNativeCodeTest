import { StatusBar } from "expo-status-bar"
import { SafeAreaView } from "react-native-safe-area-context"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

// Data
import { HeaderImageSlider, ShowsImageSlider } from "../../data/SliderData"
import { CardItems } from "../../data/CardData"
import { MenuItems } from "../../data/MenuData"

// Components
import Header from "../../components/Header"
import Slider from "../../components/Slider"
import Card from "../../components/Card"
import MenuItem from "../../components/MenuItem"
import { LinearGradient } from "expo-linear-gradient"
import { animalInfoName } from "../../App"
import { AnimalInfo } from "../../data/AnimalInfoData"


const HomeScreen = ({ navigation }) => {

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
            marginTop: 20,
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
        
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 10, 
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={{
            fontSize: 20,
          }}>Featured Animal</Text>
          <TouchableOpacity>
            <Text style={{
              fontSize: 12,
              color: "tomato"
            }}>View All</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(animalInfoName, {
            item: AnimalInfo[0]
          })}}
          style={{
            alignItems: "center"
          }}
        >
          <Image 
            style={{
              width: 300,
              height: 200,
              borderRadius: 10,
            }}
            source={require("../../assets/images/alligator-gar.jpg")} />
          <LinearGradient
            colors={['transparent', 'rgba(123, 36, 77, 0.8)']}
            style={{
              position: "absolute",
              width: 300,
              height: 200,
              padding: 20,
              borderRadius: 10,
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          > 
            <Text
              style={{
                width: "60%",
                color: "white",
                fontSize: 15,
                letterSpacing: 1.2,
                fontWeight: "bold",
              }}
            >
              Meet today's featured animal: The Alligator Gar
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={{
          paddingBottom: 50
        }}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

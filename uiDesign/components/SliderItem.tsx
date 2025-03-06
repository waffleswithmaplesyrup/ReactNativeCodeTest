import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { ImageSliderType } from "../data/SliderData";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
  item: ImageSliderType;
  index: number;
  scrollX: SharedValue<number>;
  autoPlayOn: boolean
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const { width } = Dimensions.get("screen");

const SliderItem = ({ item, index, scrollX, autoPlayOn }: Props) => {

  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index-1)*width, index*width, (index+1)*width],
            [-width*0.25, 0, width*0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index-1)*width, index*width, (index+1)*width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          )
        }
      ]
    }
  });

  return (
    <Animated.View
      style={[{
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        width: width
      }, 
      !autoPlayOn && rnAnimatedStyle
    ]}
    >
      <Image 
        style={{
          width: autoPlayOn ? "100%" : 300,
          height: 200,
          borderRadius: autoPlayOn ? 0 : 10,
        }}
        source={item.image} />
      <LinearGradient
        colors={['transparent', 'rgba(20, 96, 74, 0.8)']}
        style={{
          position: "absolute",
          width: autoPlayOn ? "100%" : 300,
          height: 200,
          padding: 20,
          borderRadius: autoPlayOn ? 0 : 10,
          alignItems: "flex-start",
          justifyContent: item.time !== undefined ? "space-between" : "center",
        }}
      > 
        {
          item.time !== undefined &&
          <View
            style={{
              borderRadius: 5,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5
            }}
          >
            <AntDesign name="clockcircleo" size={10} color="grey" />
            <Text
              style={{
                paddingLeft: 5,
                color: "black",
                fontSize: 10,
                letterSpacing: 1.2,
              }}
            >
              {item.time}
            </Text>
          </View>
        }
        <Text
          style={{
            width: "60%",
            color: "white",
            fontSize: 15,
            letterSpacing: 1.2,
          }}
        >
          {item.description}
        </Text>
      </LinearGradient>
    </Animated.View>
  )
}

export default SliderItem

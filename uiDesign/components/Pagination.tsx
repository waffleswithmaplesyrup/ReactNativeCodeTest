import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
import { ImageSliderType } from "../data/SliderData";
import { Dimensions, View } from "react-native";

type Props = {
  items: ImageSliderType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get("screen");


const Pagination = ({ items, paginationIndex, scrollX }: Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {
      // dots
      items.map((_, index) => {
        const pgAnimationStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [(index-1)*width, index*width, (index+1)*width],
            [8, 20, 8],
            Extrapolation.CLAMP
          );

          return {
            width: dotWidth
          };
        });
        return (
          <Animated.View
            key={index}
            style={[{
              backgroundColor: paginationIndex === index ? "tomato" : "rgb(220, 220, 220)",
              height: 8,
              width: 8,
              marginHorizontal: 4,
              borderRadius: 8,
            }, pgAnimationStyle]}
          />
          )
        })
      }
    </View>
  )
}

export default Pagination

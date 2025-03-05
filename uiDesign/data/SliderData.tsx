import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
};

export const ImageSlider = [
  {
    title: "image1",
    image: require("../assets/images/image-1.jpg"),
    description: "Don't miss our daily dive feeding!"
  },
  {
    title: "image2",
    image: require("../assets/images/image-2.jpg"),
    description: "Don't miss our daily dive feeding!"
  },
  {
    title: "image3",
    image: require("../assets/images/image-3.jpg"),
    description: "Don't miss our daily dive feeding!"
  },
];
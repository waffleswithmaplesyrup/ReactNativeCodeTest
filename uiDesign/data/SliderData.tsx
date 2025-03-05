import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
  time?: string;
};

export const HeaderImageSlider = [
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

export const ShowsImageSlider = [
  {
    title: "image4",
    image: require("../assets/images/image-4.jpg"),
    description: "Dive Feeding @ Shipwreck",
    time: "2:30 PM",
  },
  {
    title: "image5",
    image: require("../assets/images/image-5.jpg"),
    description: "Say Cheese with the Manta Mascots",
    time: "2:40 PM",
  },
  {
    title: "image6",
    image: require("../assets/images/image-6.jpg"),
    description: "Sea Jelly Secrets @ Sea Jelies Habitat",
    time: "3:30 PM",
  },
];
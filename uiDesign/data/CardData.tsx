import { ImageSourcePropType } from "react-native";

export type CardItemsType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
  action: string;
};

export const CardItems = [
  {
    title: "My e-tickets",
    image: require("../assets/icons/Icons-V2.png"),
    description: "There aren't any yet.",
    action: "Retrieve here",
  },
  {
    title: "Park hours",
    image: require("../assets/icons/Icons-V2-2.png"),
    description: "Today, 13 Feb 10am - 5pm",
    action: "Plan my visit",
  },
];
import { ImageSourcePropType } from "react-native";

export type MenuItemsType = {
  title: string;
  image: ImageSourcePropType;
};

export const MenuItems = [
  {
    title: "Map",
    image: require("../assets/icons/Group 342.png"),
  },
  {
    title: "Inhabitants",
    image: require("../assets/icons/Group 342-2.png"),
  },
  {
    title: "Shows",
    image: require("../assets/icons/Group 341.png"),
  },
  {
    title: "Shopping",
    image: require("../assets/icons/Group 275.png"),
  },
  {
    title: "Dine",
    image: require("../assets/icons/Group 310.png"),
  },
  {
    title: "Meet & Greets",
    image: require("../assets/icons/Layer 1.png"),
  },
];
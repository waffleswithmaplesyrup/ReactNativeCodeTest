import { ImageSourcePropType } from "react-native";
import { ImageSliderType } from "./SliderData";

export type AnimalInfoType = {
  name: string;
  images: ImageSliderType[];
  description: string;
  location: string;
  distance: string;
};

export const AnimalInfo = [
  {
    name: "Alligator Gar",
    images: [
      {
        title: "1",
        image: require("../assets/images/alligator-gar.jpg"),
        description: ""
      },
      {
        title: "2",
        image: require("../assets/images/alligator-gar-2.jpg"),
        description: ""
      }, 
      {
        title: "3",
        image: require("../assets/images/alligator-gar-3.jpg"),
        description: ""
      }
    ],
    description: `Gars are easily distinguished from other freshwater species by their long, slender, cylindrical bodies, long snouts, and diamond-shaped interlocking (ganoid) scales. The tail fin is rounded. Dorsal and anal fins are placed well back on the body and nearly opposite each other. Alligator gar is the largest of the gar species. It can grow up to 8 feet long and weigh more than 300 pounds. Adults have two rows of large teeth on either side of the upper jaw. Coloration is generally brown or olive above and lighter underneath. The species name spatula is Latin for "spoon", referring to the creature's broad snout.`,
    location: "ZONE 1",
    distance: "410m",
  },
];
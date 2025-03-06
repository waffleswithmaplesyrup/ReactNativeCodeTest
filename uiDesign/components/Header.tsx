import { Image, View } from "react-native"

import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <View>
        {/* // back button */}
        <Ionicons name="chevron-back-outline" size={25} color="black" />
      </View>
      <View>
        {/* logo */}
        <Image source={require('../assets/icons/image 3.png')} />
      </View>
      <View>
        {/* notification */}
        <Image source={require('../assets/icons/Leading-icon.png')} />
      </View>
    </View>
  )
}

export default Header

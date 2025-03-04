import { FunctionComponent } from "react";
import { GestureResponderEvent, StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"


interface ButtonProps {
  btnStyles?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

const CustomButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <TouchableOpacity 
      onPress={props.onPress}
    >
      <Text>Button</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

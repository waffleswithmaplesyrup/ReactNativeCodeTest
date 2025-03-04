import { RadioButton } from "react-native-paper";
import SmallText from "../../components/Texts/SmallText";
import { useEffect } from "react";
import { View } from "react-native";

import { useDispatch } from "react-redux";

const RadioComponent = (props) => {

  const dispatch = useDispatch();

  const handleSelect = () => {
    props.setSelectedValue(props.radio);
    dispatch(props.setAction(props.radio));
  };

  useEffect(() => {
    props.setSelectedValue(props.payload);
  }, []);
  
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <RadioButton.Android
        value={props.radio}
        status={props.selectedValue === props.radio ? 
                  'checked' : 'unchecked'}
        onPress={handleSelect}
        color="#007BFF"
      />
      <SmallText>
        {props.radio}
      </SmallText>
    </View>
  )
}

export default RadioComponent

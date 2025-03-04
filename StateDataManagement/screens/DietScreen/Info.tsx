import React, { FunctionComponent, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SmallText from '../../components/Texts/SmallText';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../../components/colors';

interface ComponentProps {
  info: String;
};

const Info: FunctionComponent<ComponentProps> = (props) => {

  const [infoHidden, setInfoHidden] = useState(true);

  return (
    <TouchableOpacity 
      onPress={() => setInfoHidden(!infoHidden)}>
      <Entypo name="info-with-circle" size={24} color={colors.graylight} />
      {
        !infoHidden &&
        <SmallText>{props.info}</SmallText>
      }
    </TouchableOpacity>
  )
}

export default Info

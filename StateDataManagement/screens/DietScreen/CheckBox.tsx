import React, { FunctionComponent, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import Fontisto from '@expo/vector-icons/Fontisto';
import { colors } from '../../components/colors';
import SmallText from '../../components/Texts/SmallText';

import { useSelector, useDispatch } from 'react-redux';
import { setDietsList } from '../../redux/actions';

interface ComponentProps {
  diet: String;
};

const CheckBox: FunctionComponent<ComponentProps> = (props) => {

  const [selected, setSelected] = useState(false);

  const { diets } = useSelector(state => state.formReducer); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (diets.includes(props.diet)) {
      setSelected(true);
    }
  }, []);

  const handleSelect = () => {
    
    try {
      if (diets.includes(props.diet)) {
        setSelected(false);
        dispatch(setDietsList(diets.filter(diet => diet !== props.diet)));
      } else {
        setSelected(true);
        dispatch(setDietsList([...diets, props.diet]));
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <TouchableOpacity 
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 10
      }}
      onPress={handleSelect}>
      {
        selected ?
        <Fontisto name="checkbox-active" size={24} color={colors.primary} />
        :
        <Fontisto name="checkbox-passive" size={24} color={colors.primary} />
      }
      <SmallText>{props.diet}</SmallText>
    </TouchableOpacity>
  )
}

export default CheckBox

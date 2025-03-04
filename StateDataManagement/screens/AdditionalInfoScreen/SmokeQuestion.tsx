import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import RegularText from '../../components/Texts/RegularText'
import { useSelector } from 'react-redux';
import { setDoesSmoke } from '../../redux/actions';
import RadioComponent from './RadioComponent';

const SmokeQuestion: FunctionComponent = () => {

  const { does_smoke } = useSelector(state => state.formReducer);

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <RegularText>Do you currently smoke (tobacco or marijuana)?*</RegularText>
    
      {
        ["Yes", "No"]?.map(radio => {
          return (
            <RadioComponent 
              key={radio}
              radio={radio} 
              selectedValue={selectedValue} 
              setSelectedValue={setSelectedValue} 
              setAction={setDoesSmoke}
              payload={does_smoke}
              />
          );
        })
      }
      
    </View>
  )
}

export default SmokeQuestion

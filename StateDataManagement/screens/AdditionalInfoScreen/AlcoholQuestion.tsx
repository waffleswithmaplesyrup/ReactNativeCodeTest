import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import RegularText from '../../components/Texts/RegularText'
import { useSelector } from 'react-redux';
import { setAlcohol } from '../../redux/actions';
import RadioComponent from './RadioComponent';

const AlcoholQuestion: FunctionComponent = () => {

  const { alcohol } = useSelector(state => state.formReducer);

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <RegularText>On average, how many alcoholic beverages do you have in a week?*</RegularText>
    
      {
        ['0 - 1', '2 - 5', '5+']?.map(radio => {
          return (
            <RadioComponent 
              key={radio}
              radio={radio} 
              selectedValue={selectedValue} 
              setSelectedValue={setSelectedValue} 
              setAction={setAlcohol}
              payload={alcohol}
              />
          );
        })
      }
      
    </View>
  )
}

export default AlcoholQuestion

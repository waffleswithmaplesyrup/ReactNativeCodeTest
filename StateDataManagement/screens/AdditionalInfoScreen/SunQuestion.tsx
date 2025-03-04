import React, { FunctionComponent, useState } from 'react'
import { View } from 'react-native'
import RegularText from '../../components/Texts/RegularText'
import { useSelector } from 'react-redux';
import { setDailySunExposure } from '../../redux/actions';
import RadioComponent from './RadioComponent';

const SunQuestion: FunctionComponent = () => {

  const { daily_sun_exposure } = useSelector(state => state.formReducer);

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <RegularText>Is your daily exposure to sun limited?*</RegularText>

      {
        ["Yes", "No"]?.map(radio => {
          return (
            <RadioComponent 
              key={radio}
              radio={radio} 
              selectedValue={selectedValue} 
              setSelectedValue={setSelectedValue} 
              setAction={setDailySunExposure}
              payload={daily_sun_exposure}
              />
          );
        })
      }
      
    </View>
  )
}

export default SunQuestion

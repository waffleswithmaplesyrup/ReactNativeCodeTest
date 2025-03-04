import React, { FunctionComponent, useEffect, useState } from 'react'
import { colors } from '../../components/colors';
import styled from 'styled-components/native';

import SmallText from '../../components/Texts/SmallText';

interface ComponentProps {
  concern: {
    id: Number;
    name: String;
  };
};

const ComponentView = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  background-color: ${ colors.secondary };
  border: 1px solid ${ colors.graylight };
  border-radius: 10px;
  padding: 10px;
`;

import { useSelector, useDispatch } from 'react-redux';
import { setConcernsList } from '../../redux/actions';

const SelectableComponent: FunctionComponent<ComponentProps> = (props) => {

  const [selected, setSelected] = useState(false);

  const { health_concerns } = useSelector(state => state.formReducer); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (health_concerns.includes(props.concern)) {
      setSelected(true);
    }
  }, []);
  
    const handleSelect = () => {
      
      try {
        if (health_concerns.includes(props.concern)) {
          setSelected(false);
          dispatch(setConcernsList(health_concerns.filter(concern => concern.name !== props.concern.name)));
        } else {
          if (health_concerns.length < 5) {
            setSelected(true);
            dispatch(setConcernsList([...health_concerns, props.concern]));
          } 
        }
      } catch (error) {
        console.warn(error);
      }
    };

  return (
    <ComponentView 
      onPress={handleSelect} 
      style={{ 
        backgroundColor: selected ? colors.primary : colors.secondary 
      }}>
      <SmallText>{props.concern.name}</SmallText>
    </ComponentView>
  )
}

export default SelectableComponent

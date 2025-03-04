import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { colors } from '../colors';

const StyledText = styled.Text`
  font-size: 35px;
  color: ${ colors.white };
  text-align: left;
  font-family: Lato-Bold;
  margin-bottom: 20px;
`;

// types
import { TextProps } from './types';

const BigText: FunctionComponent<TextProps> = (props) => {
  return (
    <StyledText style={ props.textStyles }>
      {props.children}
    </StyledText>
  )
}

export default BigText

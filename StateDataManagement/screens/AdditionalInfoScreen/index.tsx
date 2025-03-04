import { TouchableOpacity } from "react-native"
import RegularButton from "../../components/Buttons/RegularButton"
import styled from "styled-components/native";
import { Container } from "../../components/shared";
import { colors } from "../../components/colors";
import { StatusBar } from "expo-status-bar";
import { FunctionComponent, useCallback, useMemo, useState } from "react";
import SunQuestion from "./SunQuestion";
import SmokeQuestion from "./SmokeQuestion";
import AlcoholQuestion from "./AlcoholQuestion";
import { useSelector } from "react-redux";

const AdditionalInfoContainer = styled(Container)`
  background-color: ${ colors.secondary };
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
  margin-top: 25px;
`;

const SelectableSection = styled.View`
  width: 100%;
  margin-top: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  justify-content: flex-end;
`;

const ButtonsSection = styled.View`
  width: 100%;
  padding: 25px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const AdditionalInfoScreen: FunctionComponent = ({ navigation }) => {

  const formData = useSelector(state => state.formReducer);

  const handleSubmit = () => {
    if (formData.alcohol.length > 0 &&
      formData.does_smoke.length > 0 &&
      formData.daily_sun_exposure.length > 0
    ) {
      console.log(formData);
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <AdditionalInfoContainer>
        <TopSection>
          
          <SunQuestion />

          <SmokeQuestion />

          <AlcoholQuestion />
        
        </TopSection>

        <ButtonsSection>
          <RegularButton onPress={handleSubmit} >Get my personalized vitamin</RegularButton>
        </ButtonsSection>
      </AdditionalInfoContainer>

    </>
  )
}

export default AdditionalInfoScreen

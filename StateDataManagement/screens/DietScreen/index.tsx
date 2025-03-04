import { View } from "react-native"
import RegularButton from "../../components/Buttons/RegularButton"
import styled from "styled-components/native";
import { Container } from "../../components/shared";
import { colors } from "../../components/colors";
import { StatusBar } from "expo-status-bar";
import { FunctionComponent } from "react";
import RegularText from "../../components/Texts/RegularText";

import * as data from "../../data/Diets.json";

import CheckBox from "./CheckBox";
import Info from "./Info";
import { useSelector } from "react-redux";

const DietContainer = styled(Container)`
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

const DietScreen: FunctionComponent = ({ navigation }) => {

  const dietsData = data.data;

  const { diets } = useSelector(state => state.formReducer); 

  const handleNavigate = () => {
    
    if (diets.length > 0) {
      navigation.navigate("Allergies");
    }

  }

  return (
    <>
      <StatusBar style="light" />
      <DietContainer>
        <TopSection>
          
          <RegularText>Select the diets you follow.*</RegularText>
          
          {
            dietsData?.map(diet => {
              return (
                <View 
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    margin: 10,
                    marginLeft: 0,
                  }}
                  key={diet.id}>
                  <CheckBox diet={diet.name} />
                  <Info info={diet.tool_tip} />
                </View>
              );
            })
          }
        
        </TopSection>

        <BottomSection>

        </BottomSection>

        <ButtonsSection>
          <RegularButton 
            btnStyles={{ backgroundColor: colors.secondary }}
            textStyles={{ color: colors.primary }} 
            onPress={() => navigation.goBack()} >
            Back
          </RegularButton>

          <RegularButton onPress={handleNavigate} >Next</RegularButton>
        </ButtonsSection>
      </DietContainer>

    </>
  )
}

export default DietScreen

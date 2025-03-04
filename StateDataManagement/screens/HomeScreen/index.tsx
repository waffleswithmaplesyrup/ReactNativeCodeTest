
import RegularButton from "../../components/Buttons/RegularButton"
import { FunctionComponent } from "react"
import { StatusBar } from "expo-status-bar"
import styled from "styled-components/native"
import { Container } from "../../components/shared"
import { colors } from "../../components/colors"
import BigText from "../../components/Texts/BigText"
import SmallText from "../../components/Texts/SmallText"
import RegularText from "../../components/Texts/RegularText"

const HomeContainer = styled(Container)`
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

import background from "../../assets/images/react-logo.png";

const HomeScreen: FunctionComponent = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <HomeContainer>

        <TopSection>
          
          <BigText>Welcome to DailyVita</BigText>

          <RegularText>Hello, we are here to make your life healthier and happier</RegularText>

        </TopSection>

        <BottomSection>
          <TopImage source={background} />

          <SmallText>We will ask a couple of questions to better undertand your vitamin needs.</SmallText>

        </BottomSection>
        
        <ButtonsSection>
          <RegularButton onPress={() => navigation.navigate("Concerns")} >Get Started</RegularButton>
        </ButtonsSection>

      </HomeContainer>
    </>
    
  )
}

export default HomeScreen


import RegularButton from "../../components/Buttons/RegularButton"
import styled from "styled-components/native";
import { Container } from "../../components/shared";
import { colors } from "../../components/colors";
import { StatusBar } from "expo-status-bar";
import { FunctionComponent, useEffect, useState } from "react";
import RegularText from "../../components/Texts/RegularText";

import * as data from "../../data/Allergies.json";

import { useDispatch, useSelector } from "react-redux";
import { setAllergiesList } from "../../redux/actions";
import DropDownPicker from "react-native-dropdown-picker";

const AllergiesContainer = styled(Container)`
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

const AllergiesScreen: FunctionComponent = ({ navigation }) => {

  const { allergies } = useSelector(state => state.formReducer);
  const dispatch = useDispatch();

  const allergiesData = data.data;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchAllergies = () => {
      if (allergies.length > 0) {
        setValue(allergies.map(allergy => allergy.id));
      }
    };
    fetchAllergies();
  }, []);

  useEffect(() => {
    const updateAllergiesList = () => {
      const allergiesArray = value.map(id => allergiesData.find(allergy => allergy.id === id));
      dispatch(setAllergiesList(allergiesArray));
    };
    updateAllergiesList();
  }, [value]);
  
  return (
    <>
      <StatusBar style="light" />
      <AllergiesContainer>
        <TopSection>
          
          <RegularText>Write any specific allergies or sensitivity towards specific things. (optional)</RegularText>
          
          <DropDownPicker
            open={open}
            value={value}
            items={allergiesData.map(data => {
              return { label: data.name, value: data.id };
            })}
            setOpen={setOpen}
            setValue={setValue}
            theme="DARK"
            multiple={true}
            mode="BADGE"
            badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
          />
        </TopSection>

        <ButtonsSection>
          <RegularButton 
            btnStyles={{ backgroundColor: colors.secondary }}
            textStyles={{ color: colors.primary }} 
            onPress={() => navigation.goBack()} >
            Back
          </RegularButton>

          <RegularButton onPress={() => navigation.navigate("Additional")} >Next</RegularButton>
        </ButtonsSection>
      </AllergiesContainer>

    </>
  )
}

export default AllergiesScreen

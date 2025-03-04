import { TouchableOpacity } from "react-native"
import RegularButton from "../../components/Buttons/RegularButton"
import styled from "styled-components/native";
import { Container } from "../../components/shared";
import { colors } from "../../components/colors";
import { StatusBar } from "expo-status-bar";
import { FunctionComponent, useCallback } from "react";
import SelectableComponent from "./SelectableComponent";
import RegularText from "../../components/Texts/RegularText";

import * as data from "../../data/Healthconcern.json";
import DraggableFlatList, { RenderItemParams } from "react-native-draggable-flatlist";

import { useDispatch, useSelector } from "react-redux";
import { setConcernsList } from "../../redux/actions";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const ConcernsContainer = styled(Container)`
  background-color: ${ colors.secondary };
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

type Item = {
  id: string;
  name: String;
};

const ConcernsScreen: FunctionComponent = ({ navigation }) => {

  const { health_concerns } = useSelector(state => state.formReducer);
  const dispatch = useDispatch();

  const concerns = data.data;

  const handleNavigate = () => {
    
    if (health_concerns.length > 0) {
      navigation.navigate("Diets");
    }

  }

  return (
    <>
      <StatusBar style="light" />
      <ConcernsContainer>
        <TopSection>
          
          <RegularText>Select the top health concerns.*</RegularText>
          <RegularText>(up to 5)</RegularText>
          <SelectableSection>
            {
              concerns?.map(concern => <SelectableComponent key={concern.id} concern={concern} />)
            }
          </SelectableSection>
        
        </TopSection>

        <BottomSection>

          <RegularText textStyles={{ marginBottom: 20 }}>Prioritize</RegularText>

          <DraggableFlatList
            data={health_concerns}
            renderItem={
              useCallback(
                ({ item, drag, isActive }: RenderItemParams<Item>) => {
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: isActive ? colors.graydark : colors.primary,
                        borderRadius: 10,
                        padding: 10,
                        marginBottom: 10
                      }}
                      onLongPress={drag}
                    >
                      <RegularText>
                        {item.name}
                      </RegularText>
                      <MaterialIcons name="drag-indicator" size={24} color={colors.graydark} />
                    </TouchableOpacity>
                  );
                },
                []
              )
            }
            keyExtractor={(item, index) => `draggable-item-${index}`}
            onDragEnd={({ data }) => dispatch(setConcernsList(data))}
          />

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
      </ConcernsContainer>

    </>
  )
}

export default ConcernsScreen

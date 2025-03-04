
// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './screens/HomeScreen';
import ConcernsScreen from './screens/ConcernsScreen';

// Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import DietScreen from './screens/DietScreen';
import AllergiesScreen from './screens/AllergiesScreen';
import AdditionalInfoScreen from './screens/AdditionalInfoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  let [ fontsLoaded ] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf")
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <Provider store={Store}>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false
            }}
            initialRouteName='Home'>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen} />
            <Stack.Screen 
              name="Concerns" 
              component={ConcernsScreen} />
            <Stack.Screen 
              name="Diets" 
              component={DietScreen} />
            <Stack.Screen 
              name="Allergies" 
              component={AllergiesScreen} />
            <Stack.Screen 
              name="Additional" 
              component={AdditionalInfoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
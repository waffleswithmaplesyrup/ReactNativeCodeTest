
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// Screens
import HomeScreen from './screens/HomeScreen';
import WalletScreen from './screens/WalletScreen';
import MoreScreen from './screens/MoreScreen';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimalInfoScreen from './screens/AnimalInfoScreen';

// Screen names
export const homeName = "Home";
export const walletName = "Wallet";
export const moreName = "More";
export const animalInfoName = "AnimalInfo";
export const tabBarName = "TabBar";

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        
          if (route.name === homeName) {
            return <Image 
              source={require("./assets/icons/On.png")} 
              style={{
                tintColor: color,
                width: size+2,
                height: size+2,
              }} 
            />;
          } else if (route.name === walletName) {
            return <Ionicons name="wallet-outline" size={size} color={color} />
          } else if (route.name === moreName) {
            return <Image 
              source={require("./assets/icons/On-2.png")} 
              style={{
                tintColor: color,
                width: size+2,
                height: size+2,
              }} 
            />;
          }
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={walletName} component={WalletScreen} />
      <Tab.Screen name={moreName} component={MoreScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name={tabBarName} component={BottomTabBar} />
          <Stack.Screen name={animalInfoName} component={AnimalInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>

      
    </SafeAreaProvider>
  );
}
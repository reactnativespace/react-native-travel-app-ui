import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import TourScreen from './src/screens/TourScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'Tour'} component={TourScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}
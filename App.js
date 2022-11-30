import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import MovieDescriptionScreen from './Screens/SubScreens/MovieDescriptionScreen';
import HomeScreen from './Screens/HomeScreen';
import Signup from './Screens/SingupScreen';
import SeriesDescriptionScreen from './Screens/SubScreens/SeriesDescriptionScreen';
import AccountSettingsScreen from './Screens/SubScreens/AccountSettingsScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
//import FavoriteScreen from './SubScreens/FavoriteScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="forgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />

        <Stack.Screen 
        options={{title:'', 
        headerTintColor:'rgba(145,98,228,1)',
        headerStyle:{
          backgroundColor:'#4f4f4f',
          }
          }}
          name="MdesScreen" component={MovieDescriptionScreen} />

        <Stack.Screen 
        options={{ title:'',
        headerTintColor:'rgba(145,98,228,1)',
        headerStyle:{
          backgroundColor:'#4f4f4f',
          borderBottomWidth: 1,
          }
        }}
        name="SdesScreen" component={SeriesDescriptionScreen}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
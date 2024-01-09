import { View, Text } from 'react-native'
import React from 'react'
//import Navigations

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


//import Screens
import Welcomepage from './Welcomepage';
import Loginpage from './Loginpage';
import Signupscreen from './Signupscreen';
import Joinscreen from './joinscreen';
import Homescreen from './Homescreen';

const Stack = createNativeStackNavigator();
const BottonTab = createBottomTabNavigator();

const Customer =()=>(
  <Stack.Navigator>
         <Stack.Screen options={{headerShown:false,}} name='Login' component={Loginpage} />
          <Stack.Screen options={{headerShown:false,}} name='Signup' component={Signupscreen} />
  </Stack.Navigator>        
)

export default function Navigations() {
  return (

    <NavigationContainer> 
      <Stack.Navigator>
         <Stack.Screen options={{headerShown:false,}} name='Welcome' component={Welcomepage} /> 
         <Stack.Screen options={{headerShown:false,}} name='Join' component={Joinscreen} />     
          <Stack.Screen options={{headerShown:false,}} name='customer' component={Customer} />
          <Stack.Screen options={{headerShown:false,}} name='Home' component={Homescreen} />

          
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}


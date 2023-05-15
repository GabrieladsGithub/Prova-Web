

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from '../pages/home';
import Login from '../pages/login';
import ActivityScreen from '../pages/activity';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();


export default function Routes() {

  function HomeStackScreen() {/* Aqui a homeStackScreen pode receber varias stacks se for o caso */
    return (
      <HomeStack.Navigator initialRouteName='ActivityScreen'>
        <HomeStack.Screen name="ActivityScreen" component={ActivityScreen} />
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}/>
      </HomeStack.Navigator>
    )
  }

  function TabScreens() {/* TabScreens recebe as duas Stacls para serem Stacks */
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="HomeScreen" component={ActivityScreen} />
        <Tab.Screen name="ActivityScreen" component={HomeScreen} />
      </Tab.Navigator>
    )
  }



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={TabScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

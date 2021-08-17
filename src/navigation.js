import React from 'react';
import LoginScreen from './LoginScreen/LoginScreen';
import MainDashboard from './MainDashboard/MainDashboard';
import Registration from './Registration/Registration';
import Profile from './Profile/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import AddPhoto from './AddPhoto/AddPhoto';


const Stack = createNativeStackNavigator();



export default function MainStack() {
  const stateUsers = useSelector((state)=>state.users)
  //console.log(stateUsers.activeld)
  if (stateUsers.activeld == 0) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Registration" component={Registration} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          
          <Stack.Screen name="Home" component={MainDashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AddPhoto" component={AddPhoto} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
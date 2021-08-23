import React from 'react';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import MainDashboard from './screens/MainDashboard/MainDashboard';
import Registration from './screens/Registration/Registration';
import Profile from './screens/Profile/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import AddPhoto from './screens/AddPhoto/AddPhoto';
import EditPhoto from './screens/EditPhoto/EditPhoto';
const Stack = createNativeStackNavigator();

export default function MainStack() {
  const stateUsers = useSelector(state => state.users);
  if (stateUsers.activeld == 0) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="Registration" component={Registration} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={MainDashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AddPhoto" component={AddPhoto} />
          <Stack.Screen name="EditPhoto" component={EditPhoto} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

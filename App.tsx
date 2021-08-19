/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   Button,
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';

 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

import LoginScreen from './src/LoginScreen/LoginScreen';
import MainDashboard from './src/MainDashboard/MainDashboard';

import { Provider } from 'react-redux';
import { rootReducer } from './src/redux/rootReducer';
import { compose, createStore } from 'redux';
import { createAccount } from './src/redux/actions';
import { useDispatch } from 'react-redux';

import MainStack from './src/navigation'



let composeEnhancers = compose;

if(__DEV__){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const store = createStore(rootReducer, composeEnhancers());



createAccount({name: 'sem', password: '123'})

 

 const App0 = () => {

  return (
    
      //<LoginScreen />
      <MainStack/>
    
    //<MainDashboard/>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <App0 />
    </Provider>
    //<MainDashboard/>
  );
};
 

 export default App;

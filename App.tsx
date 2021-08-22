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

import AsyncStorage from '@react-native-async-storage/async-storage';


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}


let composeEnhancers = compose;

if(__DEV__){
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, composeEnhancers());
let persistor = persistStore(store)


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
      <PersistGate loading={null} persistor={persistor}>
        <App0 />
      </PersistGate>
    </Provider>
    //<MainDashboard/>
  );
};
 

 export default App;

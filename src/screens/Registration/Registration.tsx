import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {createAccount} from '../../redux/actions';

import {useDispatch} from 'react-redux';

function LoginScreen({navigation}: any) {
  const dispatch = useDispatch();

  const [login, setData] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState(['']);

  const allUsers = useSelector(state => state.users.users);
  const idNewUser = allUsers.length + 1;

  let counter = 0;
  let er = [''];

  const clickHandler = () => {
    er = [];
    console.log(errors);
    counter = 0;

    const data = {
      id: idNewUser,
      name: login,
      password: password,
      img: [],
      comment: [],
    };
    let flag = true;
    allUsers.forEach(function (item: any) {
      if (item.name == data.name) {
        flag = false;
      }
    });
    if (flag) {
      dispatch(createAccount(data));
      er = ['Successfully'];
      navigation.goBack();
    } else {
      er = [...er, 'The user already exists'];
      console.log(errors);
    }
    setErrors(er);
  };

  return (
    <SafeAreaView style={styles.MainArea}>
      <View style={styles.LogoContainer}>
        <Text style={styles.LogoText}>NEWiNSTAGRAM</Text>
      </View>

      <View style={styles.LoginContainer}>
        <Text>Login</Text>
        <TextInput
          style={styles.Input}
          placeholder="Enter login"
          onChangeText={login => setData(login)}
        />

        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.Input}
          placeholder="Enter password"
          onChangeText={password => setPassword(password)}
        />

        <TouchableOpacity onPress={clickHandler} style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>Registration</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.CreateAccaunt}>Go back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Errors}>
        <Text style={styles.ErrorsText}>{errors[0]}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Errors: {},
  ErrorsText: {
    color: 'red',
    margin: 10,
  },
  LoginButton: {
    backgroundColor: 'orange',
    width: '80%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 16,
  },
  LoginButtonText: {
    fontSize: 16,
  },
  LoginContainer: {
    backgroundColor: '#ffffff',
    width: '75%',
    marginTop: 130,
    padding: 16,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
    alignItems: 'center',
  },
  LogoContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  LogoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#262626',
    fontFamily: 'Gill Sans Ultra Bold',
  },
  MainArea: {
    backgroundColor: '#f6f6f6',
    flex: 1,
    alignItems: 'center',
  },
  CreateAccaunt: {
    marginTop: 10,
    color: 'grey',
    fontSize: 12,
  },
  Input: {
    paddingLeft: 5,
    backgroundColor: '#efefef',
    borderRadius: 5,
    width: '80%',
    margin: 10,
  },
});

export default LoginScreen;

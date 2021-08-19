import { Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    StyleSheet,
    Button,
} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { act } from 'react-test-renderer';
import { StateProps, userProps } from '../models/stateModel';
import { createAccount, Login } from '../redux/actions';

import { useDispatch } from 'react-redux';
import { StackRouter } from '@react-navigation/native';




function LoginScreen({navigation}: any) {

    const dispatch = useDispatch();

    const [login, setData] = useState('');
    const [password, setPassword] = useState('');

    const allUsers = useSelector((state)=>state.users.users)

    const clickHandler = () =>{
        const data = {
            name: login,
            password: password,
        }

        

        console.log(allUsers)
        allUsers.forEach(function(item: any){
            //console.log(item)
            //console.log(data)
            if((item.name == data.name) && (item.password == data.password)){
                console.log('TRUE')
                dispatch(Login({...data,id: item.id}))
            }else{
                console.log('FALSE')
            }
        })
    }

    
    /*
    <Text style={{ padding: 10, fontSize: 42 }}>
                    {login.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
    */

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
                    style={styles.Input}
                    placeholder="Enter password"
                    onChangeText={password => setPassword(password)}

                />

                
                
                <TouchableOpacity onPress={clickHandler} style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Registration')} >
                    <Text style={styles.CreateAccaunt}>
                        Create account
                    </Text>
                </TouchableOpacity>



                
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    LoginButton: {
        backgroundColor: 'orange',
        width: '80%',
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 16,
    },
    LoginButtonText: {
        fontSize: 16
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
        alignItems: "center",
        padding: 16,
        backgroundColor: '#ffffff',
        width: '100%'
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

    }
});

const mapStateToProps = (state: any) => {
    console.log(state)
    return state;
}


export default (LoginScreen)
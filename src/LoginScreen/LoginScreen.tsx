import { Formik } from 'formik';
import React from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    StyleSheet,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { act } from 'react-test-renderer';
import { StateProps, userProps } from '../models/stateModel';
import { createAccount } from '../redux/actions';


function LoginScreen() {

    return (
        <SafeAreaView style={styles.MainArea}>
            <View style={styles.LogoContainer}>
                <Text style={styles.LogoText}>NEWiNSTAGRAM</Text>
            </View>

            <Formik
                initialValues={{ name: '', password: '' }}
                onSubmit={(values, action) => {
                    console.log(values);
                    createAccount(values);
                    console.log('-------');
                    action.resetForm();
                }}>

                {(props) => (
                    <View style={styles.LoginContainer}>
                        <Text>Login</Text>
                        <TextInput
                            style={styles.Input}
                            placeholder="Enter login"
                            value={props.values.name}
                            onChangeText ={props.handleChange('name')}
                        />

                        <Text>Password</Text>
                        <TextInput
                            style={styles.Input}
                            placeholder="Enter password"
                            value={props.values.password}
                            onChangeText ={props.handleChange('password')}
                        />

                        <Button title="XXX" onPress={props.handleSubmit}/>

                        

                        <Text style={styles.CreateAccaunt}>Create account</Text>
                    </View>
                )}

            </Formik>
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

const mapStateToProps = (state:any) =>{
    console.log(state)
    return state;
}

const mapDispachToProps={
    createAccount,
}




export default connect(mapStateToProps, mapDispachToProps)(LoginScreen)
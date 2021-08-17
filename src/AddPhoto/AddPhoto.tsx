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
    Image,
    ScrollView,
} from 'react-native';
import { connect, useSelector } from 'react-redux';
import { act } from 'react-test-renderer';
import { StateProps, userProps } from '../models/stateModel';
import { createAccount, exit, Login } from '../redux/actions';

import { useDispatch } from 'react-redux';
import { StackRouter } from '@react-navigation/native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addImg } from '../redux/actions';




function AddPhoto({navigation}: any) {

    const stateUsers = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const allUsers = stateUsers.users
    const activeldUsers = stateUsers.activeld

    let userNow = allUsers[activeldUsers - 1]

    const addPhoto = () => launchImageLibrary(
        {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 300,
            includeBase64: true,
        },
        (image) => {
            console.log(image.assets[0].uri)
            const data = {
                id: activeldUsers,
                name: userNow.name,
                password: userNow.password,
                img: [...userNow.img, image.assets[0].uri],
            }
            dispatch(addImg(data))
        }
    )
    const addPhotoFromCamera = () => launchCamera(
        {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 300,
            includeBase64: false,
            saveToPhotos: true,
        },
        (image) => {
            //console.log(image)

        }
    )
    
    
   
    return (
        <SafeAreaView style={styles.MainArea}>
            <View style={styles.LogoContainer}>
                <Text style={styles.LogoText}>NEWiNSTAGRAM</Text>
            </View>
           
            <TouchableOpacity onPress={addPhoto}  >
                    <Image style={styles.AddPhoto}
                        source={{ uri: 'https://w7.pngwing.com/pngs/272/936/png-transparent-computer-icons-desktop-plus-and-minus-signs-restart-miscellaneous-sign-internet.png' }} />

                </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    UserName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#262626',
        fontFamily: 'Gill Sans Ultra Bold',
        margin: 10,
    },
    onePicture: {
        marginTop: 30,
        backgroundColor: '#ffffff',
    },
    MainPhotos: {
        width: '100%',
        height: 300,

    },
    GoToProfile: {
        width: 40,
        height: 40,
        backgroundColor: 'black',
        marginLeft: 70
    },
    AddPhoto: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        marginRight: 70,

    },
    ScrollArea: {
        //backgroundColor: 'red',
        width: '100%',
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



export default (AddPhoto)
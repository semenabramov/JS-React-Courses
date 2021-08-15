import { useCardAnimation } from '@react-navigation/stack';
import React from 'react';
import {

    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { addImg } from '../redux/actions';


const MainDashboard = () => {

    const stateUsers = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const allUsers = stateUsers.users
    const activeldUsers = stateUsers.activeld

    console.log('---')
    console.log(allUsers)
    console.log('---')



    let userNow = allUsers[activeldUsers - 1]




    /* 
    allUsers.forEach(function(item: any){

        if(item.id == activeldUsers){
            console.log('TRUE')
            userNow = item
        }else{
            console.log('FALSE')
        }
    })
    */


    const addPhoto = () => launchImageLibrary(
        {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 300,
            includeBase64: true,
        },
        (image) => { 
            console.log(image.assets[0].uri)
            const data ={
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
        },
        (image) => {
            console.log(image)
            
         }
    )

    /*
    <TouchableOpacity onPress={addPhotoFromCamera}  >
                    <Text >launchCamera</Text>
                </TouchableOpacity>
                */

    return (
        <SafeAreaView style={styles.MainArea}>
            <View style={styles.LogoContainer}>
                <Text style={styles.LogoText}>NEWiNSTAGRAM</Text>
            </View>
            <ScrollView style={styles.ScrollArea}>
                <View style={styles.onePicture}>
                    <Text style={styles.UserName}>Pthoto by: {userNow.name}</Text>
                    <Image style={styles.MainPhotos} 
                    source={{ uri: userNow.img[0] }} />
                </View>
                <View style={styles.onePicture}>
                    <Text style={styles.UserName}>Pthoto by: {userNow.name}</Text>
                    <Image style={styles.MainPhotos} 
                    source={{ uri: "/" }} />
                </View>
                <View style={styles.onePicture}>
                    <Text style={styles.UserName}>Pthoto by: {userNow.name}</Text>
                    <Image style={styles.MainPhotos} 
                    source={{ uri: "/" }} />
                </View>
                

            </ScrollView>
            <View style={styles.Fotter}>
                <TouchableOpacity onPress={addPhoto}  >
                    <Image style={styles.AddPhoto}
                        source={{ uri: 'https://w7.pngwing.com/pngs/272/936/png-transparent-computer-icons-desktop-plus-and-minus-signs-restart-miscellaneous-sign-internet.png' }} />

                </TouchableOpacity>
                <Image style={styles.GoToProfile}
                    source={{ uri: 'https://e7.pngegg.com/pngimages/52/368/png-clipart-user-profile-computer-icons-avatar-avatar-heroes-monochrome.png' }} />

            </View>


        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    UserName:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#262626',
        fontFamily: 'Gill Sans Ultra Bold',
        margin: 10,
    },
    onePicture:{
        marginTop: 30,
        backgroundColor: '#ffffff',
    },
    MainPhotos:{
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
    Fotter: {
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    MainArea: {
        backgroundColor: '#f6f6f6',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
    },
    LogoContainer: {
        alignItems: "center",
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
});

export default MainDashboard;
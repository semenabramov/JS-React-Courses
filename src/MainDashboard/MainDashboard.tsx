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


const MainDashboard = ({ navigation }: any) => {

    const stateUsers = useSelector((state) => state.users)
    const dispatch = useDispatch();

    const allUsers = stateUsers.users
    const activeldUsers = stateUsers.activeld

    console.log('---')
    console.log(allUsers)
    console.log('---')



    let userNow = allUsers[activeldUsers - 1]


    return (
        <SafeAreaView style={styles.MainArea}>


            

            <View style={styles.LogoContainer}>
                <Text style={styles.LogoText}>NEWiNSTAGRAM</Text>
            </View>
            <ScrollView style={styles.ScrollArea}>

            
            {
                allUsers.map(function (user: any) {
                    //console.log(item)
                    //console.log(userNow.img.length - counter)
                    //counter = counter + 1;

                    let counter = 0;
                    return (
                        user.img.map(function (item: any) {
                            //console.log(item)
                            console.log(user.id * 100 + user.img.length - counter)
                            counter = counter + 1;
                            return (

                                < View style={styles.onePicture} key={user.id * 100 + user.img.length - counter} >
                                    
                                    <Text style={styles.UserName}>Photo by: {user.name}</Text>
                                    <Image style={styles.MainPhotos}
                                        source={{ uri: item }} />
                                    
                                    <View style={styles.CommentTab}>
                                        <Text style={styles.Comment}>{user.comment[counter - 1]}</Text>
                                    </View>
                                </View>
                            )

                        })
                    )

                })
            }

                


            </ScrollView>
            <View style={styles.Fotter}>
                <TouchableOpacity onPress={() => navigation.navigate('AddPhoto')}  >
                    <Image style={styles.AddPhoto}
                        source={{ uri: 'https://w7.pngwing.com/pngs/272/936/png-transparent-computer-icons-desktop-plus-and-minus-signs-restart-miscellaneous-sign-internet.png' }} />

                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} >
                    <Image style={styles.GoToProfile}
                        source={{ uri: 'https://e7.pngegg.com/pngimages/52/368/png-clipart-user-profile-computer-icons-avatar-avatar-heroes-monochrome.png' }} />

                </TouchableOpacity>

            </View>


        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    Like:{
        width: 25,
        height: 25,
        margin: 5,
    },
    CommentTab:{
        width: '100%',
        //height: 40,
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'row',
    },
    Comment:{
        margin: 5,
        fontSize: 16,
        width: 280,
    },
    UserName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#262626',
        fontFamily: 'Gill Sans Ultra Bold',
        margin: 10,
    },
    onePicture: {
        //marginTop: 30,
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
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';
import {exit} from '../../redux/actions';

function Profile({navigation}: any) {
  const stateUsers = useSelector(state => state.users);
  const dispatch = useDispatch();

  const allUsers = stateUsers.users;
  const activeldUsers = stateUsers.activeld;

  let userNow = allUsers[activeldUsers - 1];

  const clickHandler = () => {
    dispatch(exit());
  };
  console.log();

  let counter = 0;
  return (
    <SafeAreaView style={styles.MainArea}>
      <View style={styles.LogoContainer}>
        <Text style={styles.LogoText}>NEWiNSTAGRAM</Text>
      </View>
      <TouchableOpacity style={styles.ExitTab} onPress={clickHandler}>
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>EXIT</Text>
      </TouchableOpacity>
      <ScrollView style={styles.ScrollArea}>
        {userNow.img.map(function (item: any) {
          console.log(item);
          console.log(userNow.img.length - counter);
          counter = counter + 1;
          let toRoute = {idImg: counter};
          console.log(toRoute);
          return (
            <View style={styles.onePicture} key={userNow.img.length - counter}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('EditPhoto', toRoute)}>
                  <Image
                    style={{width: 40, height: 40, margin: 8}}
                    source={{
                      uri: 'https://static.vecteezy.com/system/resources/previews/000/330/430/original/vector-pencil-line-black-icon.jpg',
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.UserName}>Photo by: {userNow.name}</Text>
              </View>

              <Image style={styles.MainPhotos} source={{uri: item}} />
              <View style={styles.CommentTab}>
                <Text style={styles.Comment}>
                  {userNow.comment[counter - 1]}
                </Text>
                <Image
                  style={styles.Like}
                  source={{
                    uri: 'http://cdn.onlinewebfonts.com/svg/img_165452.png',
                  }}
                />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Like: {
    width: 25,
    height: 25,
    margin: 5,
  },
  CommentTab: {
    width: '100%',
    //height: 40,
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
  },
  Comment: {
    margin: 5,
    fontSize: 16,
    width: 280,
  },
  ExitTab: {
    width: '100%',
    height: 40,
    backgroundColor: 'orange',
    alignItems: 'center',
    padding: 3,
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
    marginLeft: 70,
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

export default Profile;

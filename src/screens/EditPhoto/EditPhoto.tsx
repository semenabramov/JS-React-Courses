import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {addImg} from '../../redux/actions';

function EditPhoto({navigation, route}: any) {
  const stateUsers = useSelector(state => state.users);
  const dispatch = useDispatch();

  const allUsers = stateUsers.users;
  const activeldUsers = stateUsers.activeld;

  let userNow = allUsers[activeldUsers - 1];

  const idImg = route.params.idImg - 1;

  console.log(idImg);

  const [preImage, setPreImage] = useState(userNow.img[idImg]);
  const [comment, setСomment] = useState(userNow.comment[idImg]);

  const addPhoto = () =>
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        includeBase64: true,
      },
      image => {
        if (!image.didCancel) {
          setPreImage(image.assets[0].uri);
        }
      },
    );
  const addPhotoFromCamera = () =>
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
        includeBase64: false,
        saveToPhotos: true,
      },
      image => {
        if (!image.didCancel) {
          setPreImage(image.assets[0].uri);
        }
      },
    );
  const addPhotoToAccount = () => {
    let newImg = userNow.img;
    newImg[idImg] = preImage;

    let newComment = userNow.comment;
    newComment[idImg] = comment;

    const data = {
      id: activeldUsers,
      name: userNow.name,
      password: userNow.password,
      img: newImg,
      comment: newComment,
    };
    console.log(data);
    dispatch(addImg(data));
    navigation.goBack();
  };

  const DeletePost = () => {
    let newImg_del = userNow.img;
    newImg_del.splice(idImg, 1);
    console.log(newImg_del);

    let newComment_del = userNow.comment;
    newComment_del.splice(idImg, 1);
    console.log(newComment_del);

    const data_del = {
      id: activeldUsers,
      name: userNow.name,
      password: userNow.password,
      img: newImg_del,
      comment: newComment_del,
    };
    console.log('DELETE');
    console.log(data_del);
    dispatch(addImg(data_del));
    navigation.goBack();
  };

  //let com =userNow.comment[idImg]

  return (
    <SafeAreaView style={styles.MainArea}>
      <View style={styles.LogoContainer}>
        <Text style={styles.LogoText}>NEWiNSTAGRAM</Text>
      </View>

      <Image style={styles.MainPhotos} source={{uri: preImage}} />
      <TextInput
        style={styles.Input}
        placeholder="Enter comment"
        value={comment}
        onChangeText={comment => setСomment(comment)}
      />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'red',
        }}>
        <TouchableOpacity style={styles.Tab} onPress={addPhoto}>
          <View>
            <Text style={styles.TabText}>Add from galery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Tab} onPress={addPhotoFromCamera}>
          <View>
            <Text style={styles.TabText}>Take a photo</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.UploadPhoto} onPress={addPhotoToAccount}>
        <View>
          <Text style={{textAlign: 'center', marginTop: 14}}>
            Update the post
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.UploadPhoto} onPress={DeletePost}>
        <View>
          <Text style={{textAlign: 'center', marginTop: 14}}>
            Delete the post
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  UploadPhoto: {
    width: '100%',
    backgroundColor: '#dedede',
    borderTopWidth: 2,
    borderColor: '#C4C4C4',
    height: 50,
  },
  Tab: {
    backgroundColor: '#dedede',
    width: '50%',
    //borderRadius: 5,
    borderLeftWidth: 2,
    borderColor: '#C4C4C4',
    height: 100,
    margin: 0,
  },
  TabText: {
    textAlign: 'center',
    marginTop: '20%',
  },
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
    width: '100%',
    margin: 0,
  },
});

export default EditPhoto;

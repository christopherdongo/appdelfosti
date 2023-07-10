import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {colors} from '../../theme/colors';
import {styles} from '../../theme/stylesForm';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import days from 'dayjs';
import {createPostData} from '../../redux/actions/postActions';
import {AppDispatch, ItemData, PropButton, RootState} from '../../types/types';
import {CustomInput} from '../CustomInput/CustomInput';

export const FormCreate = ({returnHome}: PropButton) => {
  const {post} = useSelector((state: RootState) => state.post);

  const dispatch = useDispatch<AppDispatch>();

  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submit = () => {
    if (user.length != 0 && title.length != 0 && description.length != 0) {
      const data: ItemData = {
        title,
        user,
        createdAt: days().format('DD MMMM YYYY'),
        description,
        image:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        Likes: false,
        id: (Number(post.length) + 1).toString(),
      };
      dispatch(createPostData(data));
      returnHome();
      setUser('');
      setTitle('');
      setTitle('');
      setDescription('')
      Alert.alert('Post creado');
    } else {
      Alert.alert('sus campos estan vacios!!');
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      contentContainerStyle={styles.root}>
      <View style={styles.containerText}>
        <Text style={styles.titleText}>Crear Post</Text>
      </View>
      <CustomInput
        label="usuario"
        placeholder="ingrese su usuario"
        value={user}
        Onchange={setUser}
      />
      <CustomInput
        label="titulo"
        placeholder="ingrese su titulo"
        value={title}
        Onchange={setTitle}
      />
      <CustomInput
        label="descripcion"
        placeholder="ingrese su descripcion"
        value={description}
        Onchange={setDescription}
        multiline={true}
        numberOfLines={20}
      />

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnSubmit} onPress={submit}>
          <Icon name="post-add" size={30} />
          <Text style={{color: colors.black, textAlign: 'center'}}>Crear</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};


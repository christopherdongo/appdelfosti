import React,{useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch} from 'react-redux';
import {updatePostData} from '../../redux/actions/postActions';
import { AppDispatch, ItemData, PropsNavitagion } from '../../types/types';
import {styles} from '../../theme/stylesCard';

export const CardPublication = ({data}: {data: ItemData}) => {
  const {id, title, description, Likes} = data;

  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<PropsNavitagion>();

  const[likes, setLikes] = useState(Likes)

  const likesHandler=async (id: string) => {
       setLikes(!likes);
       dispatch(updatePostData({id, Likes:!likes}));
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details',{
        ...data
      })}
    >
    <View style={styles.post}
    >
      {/*Header*/}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
          }}
          style={styles.useAvatar}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.titleHeader}>{title}</Text>
        </View>
        <Entypo
          style={styles.threeDots}
          name="dots-three-horizontal"
          size={16}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
         <AntDesign onPress={() => likesHandler(id)}  name={likes ? 'heart' : 'hearto'} size={24} style={styles.icon} 
          color={ likes? colors.accent : colors.black}
         
         /> 
         <Text>{likes? 'buena' : 'mala'}</Text>
          <Feather
            name="bookmark"
            size={24}
            style={[{marginLeft: 'auto'}, styles.icon]}
          />
        </View>
        <Text style={styles.text}>
          <Text style={styles.textFonts}></Text> {description}
        </Text>
      </View>
    </View>

    </TouchableOpacity>

  );
};


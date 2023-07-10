import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import {ItemData, PropsComponents} from '../types/types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../theme/colors';
import {styles} from '../theme/stylesDetails';

export const Details: React.FC<PropsComponents> = ({route}) => {

const {title, Likes, createdAt, image,description,user}  = {...route.params} as ItemData; 
  
  return (
    <SafeAreaView 
    style={{flex: 1, marginHorizontal: 5}}
    >
       <View style={styles.post}>
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

      <Image
        source={{
        uri:`${image}`,
        }}
        style={styles.image}
      />
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
         <AntDesign   name={Likes ? 'heart' : 'hearto'} size={24} style={styles.icon} 
         color={ Likes? colors.accent : colors.black}
         
         /> 
         <Text>{Likes? 'buena' : 'mala'}</Text> 
          <Feather
            name="bookmark"
            size={24}
            style={[{marginLeft: 'auto'}, styles.icon]}
          />
        </View>

        <Text style={styles.text}>
          <Text style={styles.textFonts}>{user}</Text> {description}
        </Text>

        <Text>{createdAt}</Text>
      </View>
       </View>  

       </SafeAreaView >
   
  );
};


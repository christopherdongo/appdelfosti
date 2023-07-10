import React from 'react';
import {SafeAreaView } from 'react-native';
import {FormCreate} from '../components/Form/FormCreate';
import { PropsComponents } from '../types/types';

export const Create: React.FC<PropsComponents> = ({navigation}) => {

 const returnHome=()=>{
  navigation.navigate('Home');
 }

  return (

      <SafeAreaView
      style={{flex: 1, marginHorizontal: 5}}
      >
      <FormCreate  returnHome={returnHome}/>
    </SafeAreaView>
  );
};

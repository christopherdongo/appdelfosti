import React from 'react';
import { TextInput, View, Text} from 'react-native';
import {styles} from '../../theme/stylesForm'
import { PropsInput } from '../../types/types';


export const CustomInput = ( {label, placeholder, value, Onchange, multiline, numberOfLines}:PropsInput) =>{

    return (
      <View style={styles.formulario}
      >
      <Text style={styles.label}>{label}:</Text>
      <TextInput
      placeholder={placeholder}
      placeholderTextColor="#4C6793"
        value={value}
        onChangeText={Onchange}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={multiline? styles.textArea : styles.input}
      />
      </View>
    )
    
}

import { StyleSheet, Platform } from "react-native";
import { colors } from "./colors";
import { size, weight } from "./font";


export const styles = StyleSheet.create({
    root:{
      justifyContent:'flex-start',
      padding: 10,
    },
    formulario: {
      paddingHorizontal: 5,
      paddingVertical: 0,

    },
    title: {
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: 15,
      marginTop: 10,
      textAlign: 'center',
      marginBottom: 5,
    },
    section: {
      borderRadius: 10,
      borderColor: colors.secondary,
      borderWidth: 0,
      marginHorizontal:5,
      paddingBottom: 15,
    },
  
    label: {
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: size.md,
      marginTop: 20,
      marginLeft: 5,
      marginRight: 5,
      marginBottom: 5,
      fontFamily:'Arial',
    },
    input: {
      borderColor: colors.accent,
      borderStyle: 'solid',
      borderRadius: 10,
      fontSize: size.md,
      marginTop: 5,
      marginHorizontal:5,
      paddingLeft: 10,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      color: colors.secondary,
      backgroundColor:colors.lightgrey,
      
    },
    textareaContainer: {
      borderWidth: 4,
      borderColor: colors.lightgrey,
      borderRadius: 10,
      marginTop: 5,
      paddingHorizontal:5,
      padding: 5,
    },
    textArea: {
      height: 80,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      textAlignVertical: 'top',
      fontSize: size.md,
      borderRadius: 10,
      paddingLeft: 10,
      color: colors.secondary,
      overflow:'scroll',
      backgroundColor:colors.lightgrey,
      marginHorizontal:5,
    },
    containerCheckbox: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 10,
    },
    btnContainer:{
      paddingHorizontal: 5,
      paddingVertical: 0,
      alignItems:'center'
    },
  
    btnSubmit: {
      backgroundColor: colors.secondary,
      borderRadius: 40,
      fontSize: size.md,
      fontWeight: '600',
      color: colors.lightgrey,
      marginVertical:20,
      padding: 10,
      width:'70%',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
    },
    containerText:{
      height:50,
      paddingTop: Platform.OS === 'android' ? 15 : 0,
      justifyContent:'center',
      alignItems:'center',
    },
    titleText:{
      fontSize:size.lg,
      fontWeight: weight.md,
    },
  });


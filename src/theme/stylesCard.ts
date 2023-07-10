import { StyleSheet } from "react-native";
import { size, weight } from "./font";
import { colors } from "./colors";




export const styles = StyleSheet.create({
    post: {
      flex: 1,
      borderWidth:3,
      borderColor:'black',
      marginTop:10,
    },
    image: {
      height: 200,
      width: '100%',
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      height:50,
    },
    useAvatar: {
      height: 40,
      width: 40,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: weight.bold,
      color: colors.black,
    },
    threeDots: {
      marginLeft: 'auto',
    },
    footer: {
      padding: 10,
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5,
    },
    icon: {
      marginHorizontal: 5,
      color: colors.black,
    },
    text: {
      color: colors.black,
      lineHeight: 18,
    },
    textFonts: {
      fontWeight: weight.bold,
    },
    containerTitle: {
      flex: 1,
    },
    titleHeader: {
      textAlign: 'center',
      color: colors.black,
      textTransform: 'capitalize',
      right:30,
      fontSize:size.md,
      fontWeight: weight.bold,
    },
  });
  
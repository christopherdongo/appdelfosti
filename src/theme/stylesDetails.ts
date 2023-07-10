import { StyleSheet } from "react-native";
import { size, weight } from "./font";
import { colors } from "./colors";



export const styles = StyleSheet.create({
    post:{
     flex:1,
     justifyContent:'flex-start',
     marginHorizontal: 5,
    },
 image: {
   height: 250,
   width: '100%',
 },
 header: {
   flexDirection: 'row',
   textAlign:'center',
   alignItems:'center',
   height:60,
   marginBottom:5,
   padding: 10,
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
   right:30,
   fontSize:size.lg,
   fontWeight: weight.bold,
 },
});

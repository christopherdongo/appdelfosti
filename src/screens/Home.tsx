import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform
} from 'react-native';
import {CardPublication} from '../components/Card/CardPublication';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, ItemData, PropsComponents, RootState} from '../types/types';
import {readHooks} from '../hooks/ReadHook';
import {addPostData} from '../redux/actions/postActions';
import { size, weight } from '../theme/font';

export const Home = () => {
  const {addData} = readHooks();
  const { post } = useSelector((state: RootState) => state.post);
  const dispatch = useDispatch<AppDispatch>();

/*useEffect inicial*/ 
  useEffect(() => {
    addAsyncData();
  }, []);


  const addAsyncData = async () => {
    const result = await addData();
    dispatch(addPostData(result));
  };


  // 

  return (
    <SafeAreaView 
    style={{flex: 1, marginHorizontal: 5}}
    >
      <View
      style={styles.containerText}
      ><Text style={styles.titleText}>Mis Post</Text></View>

        {/*card publicacion*/}
        <ScrollView>
          <FlatList
            data={[...post].sort((a,b) => Number(b.id) - Number(a.id))}
            scrollEnabled={false}
            renderItem={({item}) => <CardPublication data={item} />}
            keyExtractor={(item: ItemData) => item.id}
          />
        </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  containerText:{
    height:50,
    paddingTop: Platform.OS === 'android' ? 15 : 0,
    justifyContent:'center',
    alignItems:'center',
  },
  titleText:{
    fontSize:size.lg,
    fontWeight: weight.md,
  }
})
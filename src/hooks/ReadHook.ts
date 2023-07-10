import dataJson from '../../api.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const readHooks = () => {
  const addData = async () => {
    try {
      const data = await AsyncStorage.getItem('data');

      if (data === null) {
        await AsyncStorage.setItem('data', JSON.stringify(dataJson));
        return dataJson;
      }
      return JSON.parse(data);
    } catch (e) {
      console.log(e);
    }
  };

  // guardar data en el local storage y retornar
  const saveData = async (data: any) => {
    try {
      const res_data: any = await AsyncStorage.getItem('data');
      const new_data = [...JSON.parse(res_data), data];
      await AsyncStorage.setItem('data', JSON.stringify(new_data));
    } catch (e) {
      console.log(e);
    }
  };

  const updateData = async (data:any) => {
    try {
       const data_async: any = await AsyncStorage.getItem('data');
       const resultUpdate = JSON.parse(data_async)?.map((item: any) => {
        if (item.id === data.id) {
          item = {...item, Likes: data.Likes};
        }
        return item;
      });
      await AsyncStorage.setItem('data', JSON.stringify(resultUpdate));
    
    } catch (e) {
      console.log(e);
    }
  };

  return {
    addData,
    saveData,
    updateData,
  };
};

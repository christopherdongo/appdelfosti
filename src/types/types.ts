
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { store } from '../redux/store';

// data
export interface ItemData {
  id: string;
  user: string;
  createdAt: string;
  title: string;
  image: string;
  description: string;
  Likes: boolean;
}

// navigation
export type typePostUpdate = {
  id: string,
  Likes: boolean,
}

type RootStackPros = {
    Home: undefined;
    CrearPost: undefined;
    Details: {
      id: string,
      title: string,
      description: string,
      createdAt: string,
      Likes: boolean,
      user: string,
      image: string,
    };
  };
  
  export type PropsComponents = NativeStackScreenProps<RootStackPros>;

  export type PropsNavitagion = NativeStackNavigationProp<RootStackPros>

  export type DetailsScreenRouteProp = NativeStackNavigationProp<RootStackPros>

  export type Props = {
    route: DetailsScreenRouteProp;
    navigation: PropsComponents;
  };

  //react component children function
  export interface PropButton {
    returnHome() : void
  }
  

//redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//input 
export type PropsInput ={
  label: string,
  placeholder: string,
  value: string,
  Onchange:(arg: string) => void,
  multiline?: boolean,
  numberOfLines?: number
}
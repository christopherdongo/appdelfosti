import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Home} from '../screens/Home';
import {Create} from '../screens/Create';
import {Details} from '../screens/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//header style
const options = {
  backgroundColor: '#f6f6f6',
};

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade',
        presentation: 'card',
        gestureEnabled: true,
        headerShadowVisible: false,
        contentStyle: {backgroundColor: '#F6F6F6'},
      }}
      initialRouteName="Inicio">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'inicio de app',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalles del Post',
          headerTitleAlign: 'center',
          headerStyle: options,
        }}
      />
    </Stack.Navigator>
  );
};

export const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 40,
          },
        }}
        initialRouteName="Inicio">
        <Tab.Screen
          name="Inicio"
          component={HomeStackNavigation}
          options={{
            tabBarHideOnKeyboard: true,
            tabBarIcon: tabInfo => {
              return (
                <Ionicons
                  name="md-home"
                  size={20}
                  color={tabInfo.focused ? '#003a70' : '#8e8e93'}
                />
              );
            },
          }
        
        }
        />
        <Tab.Screen
          name="Crear Post"
          component={Create}
          options={{
            tabBarHideOnKeyboard: true,
            tabBarIcon: tabInfo => {
              return (
                <Ionicons
                  name="md-create"
                  size={20}
                  color={tabInfo.focused ? '#003a70' : '#8e8e93'}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

//Import component
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import MessageScreen from './screens/MessageScreen';
import PostScreen from './screens/PostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';

import Icon from 'react-native-ionicons';

// //Firebase
// import FirebaseKey from './config';
// import * as firebase from 'firebase';

// var firebaseConfig = FirebaseKey;
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const AppContainer = createStackNavigator(
  {
    default: createBottomTabNavigator(
      {
        Home: {
          screen: HomeScreen,
          navigationOptions: {
            tabBarIcon: ({tinColor}) => (
              <Icon
                ios="ios-home"
                android="md-home"
                size={24}
                color={tinColor}
              />
            ),
          },
        },
        Message: {
          screen: MessageScreen,
          navigationOptions: {
            tabBarIcon: ({tinColor}) => (
              <Icon
                ios="ios-chatboxes"
                android="md-chatboxes"
                size={24}
                color={tinColor}
              />
            ),
          },
        },
        Post: {
          screen: PostScreen,
          navigationOptions: {
            tabBarIcon: ({tintColor}) => (
              <Icon
                ios="add-circle"
                android="add-circle"
                size={48}
                color="#E9446A"
                style={{
                  shadowColor: '#E9446A',
                  shadowOffset: {width: 0, height: 10},
                  shadowRadius: 10,
                  shadowOpacity: 0.3,
                }}
              />
            ),
          },
        },
        Notification: {
          screen: NotificationScreen,
          navigationOptions: {
            tabBarIcon: ({tinColor}) => (
              <Icon
                ios="notifications"
                android="md-notifications"
                size={24}
                color={tinColor}
              />
            ),
          },
        },
        Profile: {
          screen: ProfileScreen,
          navigationOptions: {
            tabBarIcon: ({tinColor}) => (
              <Icon
                ios="person"
                android="md-person"
                size={24}
                color={tinColor}
              />
            ),
          },
        },
      },
      {
        defaultNavigationOptions: {
          tabBarOnPress: ({navigation, defaultHandler}) => {
            if (navigation.state.key === 'Post') {
              navigation.navigate('postModal');
            } else {
              defaultHandler();
            }
          },
        },
        tabBarOptions: {
          activeTintColor: '#161F3D',
          inactiveTintColor: '#B8BBC4',
          // showLabel: false,
        },
      },
    ),
    postModal: {
      screen: PostScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    // initialRouteName: "postModal"
  },
);

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

import React from 'react';
import {Image, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Custom Imports
import Home from '../Landing/Home';
import Circle from '../Landing/Circle';
import Account from '../Landing/Account';
import constants from '../../constants';
// import Calendar from './Calendar';
// import {image} from '../../assets';
// import {Colors} from '../../themes';
// import TimeSheetBusiness from './Timesheet';
// import routeName from '../../navigator/routeName';
// import Payments from './Payments';
import {vw, vh} from '../../constants/Dimension';

const Tab = createBottomTabNavigator();

function UserBottomStack() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color: tintColor, focused}) => {
          let iconName;
          switch (route.name) {
            case constants.Screens.Home:
              iconName = constants.Images.Home;
              break;
            case constants.Screens.Circle:
              iconName = constants.Images.circle;
              break;
            case constants.Screens.Account:
              iconName = constants.Images.User;
              break;
            default:
              break;
          }
          return (
            <Image
              source={iconName}
              resizeMode="contain"
              resizeMethod="resize"
              style={{height: 30, width: 30, tintColor}}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: constants.Colors.appButtonColor,
        tabBarInactiveTintColor: constants.Colors.inactiveappthemeColor,
        tabStyle: {
          //Add this
          borderTopRightRadius: 20, //add border top right radius
          borderTopLeftRadius: 20, //add border top left radius
          paddingVertical: 3,
        },
        tabBarStyle: {
          borderTopLeftRadius: vw(25),
          borderTopRightRadius: vw(25),
          height: vh(80),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
        },
        tabBarLabelStyle: {
          fontSize: vw(12),
        },
        tabBarLabel: ({focused}) => {
          return (
            <Text
              style={{
                fontSize: vw(14),
                fontWeight: '700',
                color: constants.Colors.appButtonColor,
              }}>
              {focused ? route.name : ''}
            </Text>
          );
        },
        
        // tabBarItemStyle: {backgroundColor: 'red'},
      })}
      initialRouteName={constants.Screens.Home}>
      <Tab.Screen
        options={{title: 'Home'}}
        name={constants.Screens.Home}
        component={Home}
      />
      <Tab.Screen
        options={{title: 'Circle'}}
        name={constants.Screens.Circle}
        component={Circle}
      />
      <Tab.Screen
        options={{title: 'Account'}}
        name={constants.Screens.Account}
        component={Account}
      />
    </Tab.Navigator>
  );
}

export default UserBottomStack;

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import React from 'react';

import Splash from '../../src/containers/Splash';
import Login from '../../src/containers/Login';
import Signup from '../../src/containers/Singup';
import Forget from '../../src/containers/ForgetScreen';
import ResetPassword from '../../src/containers/ResetPassword';
import Landing from '../../src/containers/Landing';

import OTPScreen from '../../src/containers/OtpScreen';
import constants from '../../src/constants';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={constants.Screens.Landing}>
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={constants.Screens.Login}
          component={Login}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={constants.Screens.SignUp}
          component={Signup}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={constants.Screens.forget}
          component={Forget}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={constants.Screens.OTP}
          component={OTPScreen}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={constants.Screens.ResetPassword}
          component={ResetPassword}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={constants.Screens.Landing}
          component={Landing}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

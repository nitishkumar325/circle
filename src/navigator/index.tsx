import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import React from 'react';

import Splash from '../../src/containers/Splash';
import Login from '../../src/containers/Login';
import Signup from '../../src/containers/Singup';
import Forget from '../../src/containers/ForgetScreen';
import ResetPassword from '../../src/containers/ResetPassword';
import OTPScreen from '../../src/containers/OtpScreen';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'OTPScreen'}>
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
          name={'Login'}
          component={Login}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Signup'}
          component={Signup}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Forget'}
          component={Forget}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'OTPScreen'}
          component={OTPScreen}
          options={{
            gestureEnabled: false,
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'ResetPassword'}
          component={ResetPassword}
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

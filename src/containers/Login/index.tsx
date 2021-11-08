import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  BackHandler,
} from 'react-native';
import CustomTextInput from '../../component/CustomTextInput';
import constants from '../../constants';
import {vw, vh} from '../../constants/Dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../component/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  const inputRefs = React.useRef<Array<any>>([]);
  const inputStyles = {
    width: vw(280),
    marginBottom: vh(10),
    backgroundColor: 'white',
    borderRadius: vw(10),
  };

  const onPressSave = () => {};

  let backAction = () => {
    BackHandler.exitApp();
    return true;
  };

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    });
    const _unsubscribe = navigation.addListener('blur', () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        scrollEnabled={true}
        style={{marginBottom: constants.Normalise(30)}}>
        <View style={styles.innerContainner}>
          <ImageBackground
            resizeMode="stretch"
            resizeMethod="resize"
            source={constants.Images.loginBack}
            style={styles.back}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.appLogo}
                source={constants.Images.AppLogo}
              />
            </View>
            <View style={styles.alignLeft40}>
              <Text style={styles.signin}>{'Sign In'}</Text>
              <CustomTextInput
                ref={ref => (inputRefs.current[0] = ref)}
                autoCapitalize="sentences"
                container={inputStyles}
                placeholder={'User Name/Phone no'}
                labelStyle={{color: 'white', fontWeight: '600'}}
                label={'Enter User Name/Phone no'}
                fieldName="accountNumber"
                keyboardType="default"
                icon={constants.Images.User}
                onChangeText={(type: string, val: string) => {}}
                onSubmitEditing={() => inputRefs.current[1].focus()}
                isError
                iconStyle={styles.iconStyle}
              />
              <CustomTextInput
                ref={ref => (inputRefs.current[1] = ref)}
                container={inputStyles}
                placeholder={'Password'}
                label={'Password'}
                fieldName="confirmNewPassword"
                onChangeText={
                  (type: string, val: string) => {}
                  //setConfirmPassword(utils.removeSpaces(val))
                }
                labelStyle={{color: 'white', fontWeight: '600'}}
                isError
                keyboardType="default"
                secureTextEntry
                returnKeyType="done"
                icon={constants.Images.lock}
                iconStyle={styles.iconStyle}
              />
              <Text style={styles.forgetPasword}>{'Forget Password ?'}</Text>
            </View>
            <CustomButton
              buttonText={'Sign'}
              handleAction={onPressSave}
              customStyle={styles.saveButtonContainer}
            />
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
      <Text
        onPress={() => {
          navigation.navigate('Signup');
        }}
        style={{
          fontSize: vw(12),
          fontWeight: '700',
          alignSelf: 'center',
          position: 'absolute',
          bottom: vh(20),
          color: 'black',
        }}>
        {'Dont have Account Sign Up Now'}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#fa8116e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    height: vw(450),
    width: '100%',
  },
  innerContainner: {
    flex: 1,
    marginTop: vh(100),
  },
  appLogo: {
    height: vw(140),
    width: vw(160),
    alignSelf: 'center',
  },
  alignLeft40: {
    marginHorizontal: vw(50),
  },
  signin: {
    color: 'white',
    fontWeight: '800',
  },
  iconStyle: {
    alignSelf: 'center',
  },
  forgetPasword: {
    alignSelf: 'flex-end',
    marginTop: vh(10),
  },
  saveButtonContainer: {
    bottom: vh(8),
    width: vw(250),
    alignSelf: 'center',
    borderRadius: vw(30),
    position: 'absolute',
    backgroundColor: '#6a9589',
    paddingVertical: vh(10),
  },
});

export default Login;

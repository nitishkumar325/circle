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
import Modal from '../../component/Modal';

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

  const onForgetPassword = () => {
    navigation.navigate(constants.Screens.forget);
  };

 
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
              <Text onPress={onForgetPassword} style={styles.forgetPasword}>
                {'Forget Password ?'}
              </Text>
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
          navigation.navigate(constants.Screens.SignUp);
        }}
        style={{
          fontSize: vw(12),
          fontWeight: '400',
          alignSelf: 'center',
          position: 'absolute',
          bottom: vh(20),
          color: 'black',
        }}>
        {"Don't  have Account"}
        <Text
          style={{
            textDecorationLine: 'underline',
            fontSize: vw(12),
            fontWeight: '700',
          }}>
          {' Sign Up Now'}
        </Text>
      </Text>
      {/* <Modal isVisible={true} onBackDropPress={() => {}} {...{renderView}} /> */}
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
  modalParent: {
    width: constants.vw(310),
    minHeight: vh(150),
    backgroundColor: constants.Colors.white,
    paddingVertical: constants.vh(10),
    borderRadius: constants.vw(20),
    alignItems: 'center',
    paddingHorizontal: vw(16),
  },
  empText: {
    fontSize: constants.vw(14),
    alignSelf: 'center',
    fontWeight: '700',
  },
  text: {
    fontSize: constants.vw(14),
    alignSelf: 'center',
    fontWeight: '400',
    marginTop: vh(5),
  },
  seperator: {
    width: '90%',
    backgroundColor: 'grey',
    height: 1,
    alignSelf: 'center',
    marginVertical: constants.vh(5),
    opacity: 0.3,
  },
});

export default Login;

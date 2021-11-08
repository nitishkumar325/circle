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
import Header from '../../component/Header';

const ResetPassword = () => {
  const navigation = useNavigation();

  const inputRefs = React.useRef<Array<any>>([]);
  const inputStyles = {
    width: vw(280),
    marginBottom: vh(10),
    backgroundColor: 'white',
    borderRadius: vw(10),
  };

  const onPressSave = () => {
    navigation.pop(2);
  };

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header headerText={'Reset Password'} onBackPress={onBackPress} />
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
              <Text style={styles.signin}>{'Reset Password'}</Text>
              <CustomTextInput
                ref={ref => (inputRefs.current[1] = ref)}
                container={inputStyles}
                placeholder={'New Password'}
                label={'Enter New Password'}
                fieldName="newPassword"
                onChangeText={
                  (type: string, val: string) => {}
                  //setConfirmPassword(utils.removeSpaces(val))
                }
                labelStyle={{color: 'white', fontWeight: '600'}}
                isError
                keyboardType="default"
                secureTextEntry
                returnKeyType="done"
                onSubmitEditing={() => inputRefs.current[2].focus()}
                icon={constants.Images.lock}
                iconStyle={styles.iconStyle}
              />
              <CustomTextInput
                ref={ref => (inputRefs.current[2] = ref)}
                container={inputStyles}
                placeholder={'Confirm New Password'}
                label={'Confirm New Password'}
                fieldName="confirmNewPassword"
                onChangeText={
                  (type: string, val: string) => {}
                  //setConfirmPassword(utils.removeSpaces(val))
                }
                labelStyle={{color: 'white', fontWeight: '600'}}
                isError
                keyboardType="default"
                onSubmitEditing={() => inputRefs.current[3].focus()}
                secureTextEntry
                returnKeyType="done"
                icon={constants.Images.lock}
                iconStyle={styles.iconStyle}
              />
              <CustomTextInput
                ref={ref => (inputRefs.current[3] = ref)}
                container={inputStyles}
                placeholder={'Code'}
                label={'Code'}
                fieldName="confirmNewPassword"
                onChangeText={
                  (type: string, val: string) => {}
                  //setConfirmPassword(utils.removeSpaces(val))
                }
                labelStyle={{color: 'white', fontWeight: '600'}}
                keyboardType="default"
                returnKeyType="done"
                icon={constants.Images.mobile_icon}
                iconStyle={styles.iconStyle}
              />
            </View>
            <CustomButton
              buttonText={'Reset Password'}
              handleAction={onPressSave}
              customStyle={styles.saveButtonContainer}
            />
          </ImageBackground>
        </View>
      </KeyboardAwareScrollView>
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
    height: vw(500),
    width: '100%',
  },
  innerContainner: {
    flex: 1,
    marginTop: vh(10),
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
    fontSize: vw(22),
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

export default ResetPassword;

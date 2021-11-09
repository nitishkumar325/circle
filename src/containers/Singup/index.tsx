import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomTextInput from '../../component/CustomTextInput';
import constants from '../../constants';
import {vw, vh} from '../../constants/Dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../component/CustomButton';
import CommonFunctions from '../../Utils/CommonFunction';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Loder from '../../component/Loader/Loader';
import Header from '../../component/Header';

const Login = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState<string>('');

  const [lastName, setLastName] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');

  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const [confirmPassword, setconfirmPassword] = useState<string>('');
  const [confirmPasswordError, setconfirmPasswordError] = useState<string>('');

  const [Error, setError] = useState(false);

  const [ErrorMsg, setErrorMsg] = useState('');

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [loder, setLoder] = React.useState(false);

  const inputRefs = React.useRef<Array<any>>([]);
  const inputStyles = {
    width: vw(280),
    marginBottom: vh(10),
    backgroundColor: 'white',
    borderRadius: vw(10),
  };

  const showAlert = () => {};
  const onBackPress = () => {
    navigation.goBack();
  };

  const onPressSave = () => {
    if (
      !firstNameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError &&
      !phoneNumberError &&
      confirmPassword === password
    ) {
      let data = {
        name: `${userName}${' '}${lastName}`,
        password: password,
        username: email,
        phone_number: phoneNumber,
        email: email,
      };
      onSubmitFormHandler();
      console.log('====data', data);
    } else {
      setError(true);
      if (firstNameError) {
        CommonFunctions.singleButton(
          'first name must be contain atleast 3 character',
          '',
          () => {},
        );
      } else if (lastNameError) {
        CommonFunctions.singleButton(
          'last name must be contain atleast 3 character',
          '',
          () => {},
        );
      } else if (phoneNumberError) {
        CommonFunctions.singleButton('invalid phone number', '', () => {});
      } else if (confirmPassword !== password) {
        CommonFunctions.singleButton(
          'password and confirm should be same ',
          '',
          () => {},
        );
      } else if (emailError) {
        CommonFunctions.singleButton(
          'Incorrect email, please retry',
          '',
          () => {},
        );
      } else if (passwordError) {
        CommonFunctions.singleButton(passwordError, '', () => {});
      } else if (confirmPasswordError) {
        CommonFunctions.singleButton(confirmPasswordError, '', () => {});
      }
    }
  };
  const onSubmitFormHandler = () => {
    setLoder(true);
    axios({
      method: 'POST',
      url: 'http://ec2-3-144-181-158.us-east-2.compute.amazonaws.com:8080/api/auth/signup',
      data: {
        name: `${userName}${' '}${lastName}`,
        password: password,
        username: email,
        phone_number: phoneNumber,
        email: email,
      },
    })
      .then(response => {
        setLoder(false);
        console.log('response', response);
        if (response.data.statusCode === 200) {
          CommonFunctions.singleButton(response.data.body, 'OK', () => {
            navigation.goBack();
          });
        } else {
          CommonFunctions.singleButton(response.data.body, 'OK', () => {});
        }
      })
      .catch((error: any) => {
        setLoder(false);
        console.log('error', error);
        CommonFunctions.singleButton(error.data.body, 'OK', () => {});
      });
  };

  const handleChange = (type: string, val: any) => {
    if (type === 'firstName') {
      const name = CommonFunctions.normalizeName(val);
      setUserName(name);
      setFirstNameError(CommonFunctions.validateName(name).msg);
      console.log(name);
      console.log(CommonFunctions.validateName(name).msg);
    } else if (type === 'phone') {
      let num = val.replace(/[- #*;,.<>\{\}\[\]\\\/]/gi, '');
      const mobile = val ? parseInt(CommonFunctions.normalizeSpaces(num)) : '';
      setPhoneNumber(mobile.toString());
      setPhoneNumberError(CommonFunctions.validatePhone(mobile).msg);
    } else if (type === 'password') {
      const password = CommonFunctions.normalizeSpaces(val);
      setPasswordError(CommonFunctions.validatePassword(val).msg);
      setPassword(password);
    } else if (type === 'confirmpassword') {
      const confirmPassword = CommonFunctions.normalizeSpaces(val);
      setconfirmPasswordError(CommonFunctions.validatePassword(val).msg);
      setconfirmPassword(confirmPassword);
    } else if (type === 'email') {
      setEmail(CommonFunctions.normalizeEmail(val));
      setEmailError(CommonFunctions.validateEmail(val).msg);
    } else if (type === 'lastName') {
      const lastName = CommonFunctions.normalizeName(val);
      setLastName(lastName);
      setLastNameError(CommonFunctions.validateLastName(lastName).msg);
      console.log(lastName);
      console.log(CommonFunctions.validateLastName(lastName).msg);
    }
  };

  const onSubmitTesting = () => {
    navigation.navigate(constants.Screens.OTP, {
      phoneNo: '9958431869',
    });
  };

const renderLeftButton = () => {
  return (
    <TouchableOpacity onPress={onBackPress} style={styles.backButtom}>
      <Image style={styles.iconColor} source={constants.Images.back} />
      <Text style={styles.headerTextStyle}>{'Sign Up'}</Text>
    </TouchableOpacity>
  );
};

  let disabled =
    phoneNumber.length == 0 ||
    userName.length == 0 ||
    lastName.length == 0 ||
    email.length === 0 ||
    password.length === 0 ||
    confirmPassword.length === 0;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.innerContainner}>
        <Header renderLeftButton={renderLeftButton} />
        <ImageBackground
          resizeMode="stretch"
          source={constants.Images.loginBack}
          style={styles.back}>
          <View>
            <View>
              <Image
                resizeMode="contain"
                style={[styles.appLogo]}
                source={constants.Images.AppLogo}
              />
            </View>
            <Text style={[styles.signin]}>{'Sign Up'}</Text>
            <KeyboardAwareScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{alignItems: 'center'}}
              style={{
                height: vh(350),
                width: '80%',
                marginHorizontal: '10%',
              }}>
              <CustomTextInput
                ref={ref => (inputRefs.current[0] = ref)}
                value={userName}
                autoCapitalize="sentences"
                container={inputStyles}
                placeholder={'First Name'}
                labelStyle={{color: 'white', fontWeight: '600'}}
                label={'Enter First Name'}
                fieldName="firstName"
                keyboardType="default"
                icon={constants.Images.User}
                onChangeText={(type: string, val: string) =>
                  handleChange(type, val)
                }
                onSubmitEditing={() => inputRefs.current[1].focus()}
                isError
                iconStyle={styles.iconStyle}
              />
              <CustomTextInput
                ref={ref => (inputRefs.current[1] = ref)}
                value={lastName}
                container={inputStyles}
                placeholder={'Last Name'}
                label={'Enter Last Name'}
                fieldName="lastName"
                keyboardType="default"
                onChangeText={(type: string, val: string) =>
                  handleChange(type, val)
                }
                labelStyle={{color: 'white', fontWeight: '600'}}
                isError
                onSubmitEditing={() => inputRefs.current[2].focus()}
                returnKeyType="done"
                icon={constants.Images.User}
                iconStyle={styles.iconStyle}
              />
              <CustomTextInput
                ref={ref => (inputRefs.current[2] = ref)}
                value={phoneNumber}
                autoCapitalize="sentences"
                container={inputStyles}
                placeholder={'Mobile Number'}
                labelStyle={{color: 'white', fontWeight: '600'}}
                label={'Enter Mobile Number'}
                fieldName="phone"
                maxLength={10}
                keyboardType="numeric"
                icon={constants.Images.mobile_icon}
                onChangeText={(type: string, val: string) =>
                  handleChange(type, val)
                }
                onSubmitEditing={() => inputRefs.current[3].focus()}
                isError
                iconStyle={styles.iconStyle}
              />
              <CustomTextInput
                ref={ref => (inputRefs.current[3] = ref)}
                value={email}
                labelStyle={{color: 'white', fontWeight: '600'}}
                container={inputStyles}
                placeholder={'Email'}
                keyboardType="default"
                onSubmitEditing={() => inputRefs.current[5].focus()}
                label={'Email'}
                icon={constants.Images.mobile_icon}
                keyboardType="email-address"
                iconStyle={styles.iconStyle}
                fieldName="email"
                onChangeText={(type: string, val: string) =>
                  handleChange(type, val)
                }
                isError
                onSubmitEditing={() => inputRefs.current[4].focus()}
              />
              <CustomTextInput
                ref={ref => (inputRefs.current[4] = ref)}
                value={password}
                container={inputStyles}
                placeholder={'Password'}
                label={'Enter Your Password'}
                fieldName="password"
                keyboardType="default"
                onChangeText={(type: string, val: string) =>
                  handleChange(type, val)
                }
                labelStyle={{color: 'white', fontWeight: '600'}}
                isError
                onSubmitEditing={() => inputRefs.current[5].focus()}
                secureTextEntry
                returnKeyType="done"
                icon={constants.Images.lock}
                iconStyle={styles.iconStyle}
              />
              <CustomTextInput
                ref={ref => (inputRefs.current[5] = ref)}
                value={confirmPassword}
                container={inputStyles}
                placeholder={'Confirm Password'}
                label={'Re Enter  Password'}
                keyboardType="default"
                fieldName="confirmpassword"
                onChangeText={(type: string, val: string) =>
                  handleChange(type, val)
                }
                labelStyle={{color: 'white', fontWeight: '600'}}
                isError
                secureTextEntry
                returnKeyType="done"
                icon={constants.Images.lock}
                iconStyle={styles.iconStyle}
              />
            </KeyboardAwareScrollView>
          </View>
          <CustomButton
            isDisabled={!disabled}
            buttonText={'Sign Up'}
            // handleAction={onPressSave}
            handleAction={onSubmitTesting}
            customStyle={[
              styles.saveButtonContainer,
              {backgroundColor: disabled ? 'grey' : '#6a9589'},
            ]}
          />
        </ImageBackground>
        <Text
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            fontSize: vw(12),
            fontWeight: '700',
            alignSelf: 'center',
            position: 'absolute',
            bottom: vh(20),
            color: 'black',
          }}>
          {'Already Have Account Sign In Now'}
        </Text>
      </View>

      {loder && <Loder />}
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
    width: '100%',
    height: vh(650),
  },
  innerContainner: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white',
  },
  appLogo: {
    height: vw(160),
    width: vw(160),
    alignSelf: 'center',
  },
  alignLeft40: {
    marginHorizontal: vw(50),
  },
  signin: {
    color: 'white',
    fontWeight: '800',
    // marginTop: vh(180),
    marginHorizontal: '13%',
  },
  iconStyle: {
    alignSelf: 'center',
  },
  forgetPasword: {
    alignSelf: 'flex-end',
  },
  saveButtonContainer: {
    bottom: vh(15),
    width: vw(250),
    alignSelf: 'center',
    borderRadius: vw(30),
    position: 'absolute',
    backgroundColor: '#6a9589',
    paddingVertical: vh(10),
  },
  backButtom: {
    flexDirection: 'row',
  },
  iconColor: {
    tintColor: 'white',
  },
  headerTextStyle: {
    fontSize: vw(14),
    color: 'white',
    fontWeight: '700',
    marginLeft: vw(10),
  },
});

export default Login;

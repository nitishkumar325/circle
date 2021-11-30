import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import {vw, vh, normalize} from '../../../../constants/Dimension';
import Header from '../../../../component/Header';
import {useNavigation} from '@react-navigation/native';
import constants from '../../../../constants';
import CustomButton from '../../../../component/CustomButton';
import ImagePicker from '../../../../Utils/ImagePickerFn';
import Loader from '../../../../component/Loader/Loader';
import CustomTextInput from '../../../../component/CustomTextInput';
import CommonFunctions from '../../../../Utils/CommonFunction';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Help = () => {
  const navigation = useNavigation();
  const inputRefs = React.useRef<Array<any>>([]);
  const actionSheet: any = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [profileImage, setProfileImage] = React.useState('');

  const [userName, setUserName] = React.useState('');
  const [firstNameError, setFirstNameError] = React.useState<string>('');

  const [lastName, setLastName] = useState<string>('');
  const [lastNameError, setLastNameError] = useState<string>('');

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');

  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [phoneNumberError, setPhoneNumberError] = useState<string>('');

  const [ErrorMsg, setErrorMsg] = useState('');
  const [Error, setError] = useState(false);

  const inputStyles = {
    width: vw(337),
    marginBottom: vh(10),
    backgroundColor: 'white',
    borderRadius: vw(10),
  };
  const onBackPress = () => {
    navigation.goBack();
  };

  const handleOpenImagePicker = () => {
    actionSheet.current.show();
  };

  const renderLeftButton = () => {
    return (
      <TouchableOpacity onPress={onBackPress} style={styles.backButtom}>
        <Image
          style={[styles.iconColor, {height: vw(17), width: vw(17)}]}
          source={constants.Images.back}
        />
        <Text style={styles.headerTextStyle}>{'Help'}</Text>
      </TouchableOpacity>
    );
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

  const onDonePress = () => {
    if (!emailError && !firstNameError && !lastNameError && !phoneNumberError) {
      setError(false);
    } else {
      setError(true);
      if (emailError) {
        setErrorMsg('Incorrect email, please retry');
      } else if (firstNameError) {
        setErrorMsg('Name should be min of 3 characters.');
      } else if (phoneNumberError) {
        setErrorMsg('Phone number must contain 10 digits');
      } else if (lastNameError) {
        setErrorMsg('Last Name should be min of 3 characters.');
      }
    }
  };

  const onRemovePress = () => {
    setProfileImage('');
  };

  let disabled =
    phoneNumber.length == 0 ||
    userName.length == 0 ||
    lastName.length == 0 ||
    email.length === 0;

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header renderLeftButton={renderLeftButton} />
      <KeyboardAwareScrollView>
        <View style={styles.innerContainner}>
          <View style={styles.alignRow}>
            <Image style={styles.iconDesign} source={constants.Images.mail} />
            <Text style={styles.fontStyle}>{'mycircle@gmail.com'}</Text>
          </View>
          <View style={styles.alignRow}>
            <Image style={styles.iconDesign} source={constants.Images.call} />
            <Text style={styles.fontStyle}>{'123456789'}</Text>
          </View>
          <View style={styles.alignRow}>
            <Image style={styles.iconDesign} source={constants.Images.location} />
            <Text
              style={[styles.fontStyle, {fontWeight: '400', color: 'black'}]}>
              {
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut Lorem ipsum .Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy '
              }
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>

      {loading && <Loader />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  innerContainner: {
    flex: 1,
    paddingHorizontal: vw(20),
    paddingTop: vh(10),
  },
  backButtom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconColor: {
    tintColor: 'white',
    height: vw(25),
    width: vw(25),
  },
  headerTextStyle: {
    fontSize: vw(18),
    color: 'white',
    fontWeight: '700',
    marginLeft: vw(10),
  },
  activeCiclr: {
    marginTop: vh(300),
    fontSize: vw(25),
    color: constants.Colors.appButtonColor,
    fontWeight: '600',
  },
  profilePicture: {
    marginTop: vh(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: vw(72),
    width: vw(72),
    borderRadius: vw(72 / 2),
  },
  removeStyle: {
    fontSize: vw(14),
    color: constants.Colors.appButtonColor,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginLeft: vw(10),
  },
  OrUploadNew: {
    fontSize: vw(14),
    fontWeight: '400',
    marginTop: vh(33),
  },
  dottedView: {
    borderStyle: 'dotted',
    borderWidth: 2,
    borderColor: constants.Colors.appButtonColor,
    borderRadius: vw(10),
    paddingVertical: vw(22),
    alignItems: 'center',
    marginTop: vh(50),
  },
  roundWhite: {
    height: vw(64),
    width: vw(64),
    borderRadius: vw(32),
    marginHorizontal: vw(132),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  uploadPhoto: {
    fontSize: vw(14),
    color: constants.Colors.appButtonColor,
    marginTop: vh(10),
  },
  cameraStyle: {
    height: vw(20),
    width: vw(20),
    resizeMode: 'contain',
    tintColor: constants.Colors.appButtonColor,
  },
  saveButtonContainer: {
    bottom: vh(15),
    width: vw(335),
    alignSelf: 'center',
    borderRadius: vw(30),
    position: 'absolute',
    backgroundColor: '#6a9589',
    paddingVertical: vh(10),
  },
  iconStyle: {
    alignSelf: 'center',
  },
  error: {
    marginTop: normalize(10),
    marginLeft: vw(40),
    flexDirection: 'row',
  },
  errImage: {
    height: normalize(17.6),
    width: normalize(18.6),
    tintColor: constants.Colors.red,
  },
  errorMessage: {
    color: constants.Colors.red,
    marginLeft: vw(10),
    fontSize: vw(14),
    width: vw(260),
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh(15),
  },
  iconDesign: {
    height: vw(15),
    width: vw(15),
    resizeMode: 'contain',
  },
  fontStyle: {
    fontSize: vw(14),
    fontWeight: '600',
    marginLeft: vw(20),
    color: 'black',
  },
});

export default Help;

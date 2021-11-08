import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import constants from '../../constants';
import {vw, vh} from '../../constants/Dimension';
import PhoneOTP from '../../component/PhoneOTP';
import CustomButton from '../../component/CustomButton';

interface Props {
  number: any;
}

const OTPScreen = ({number = '+919958431869'}: Props) => {
  const onResendPress = () => {};
  const onSubmitPressOTP = () => {};
  const onPressSave = () => {};
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.constainer}>
        <Image style={styles.appLogo} source={constants.Images.AppLogo} />
        <Text style={styles.veri}>{'Verification Code'}</Text>
        <Text style={styles.sent}>
          {'We have sent the verification code to\n Your Mobile Number'}
        </Text>
        <View style={styles.alignRow}>
          <Text style={styles.number}>{number}</Text>
          <TouchableOpacity style={styles.greenCircle}>
            <Image style={styles.pencil} source={constants.Images.otp_pencil} />
          </TouchableOpacity>
        </View>
        <PhoneOTP onResend={onResendPress} onSubmit={onSubmitPressOTP} />
        <CustomButton
          buttonText={'Verify'}
          handleAction={onPressSave}
          customStyle={styles.saveButtonContainer}
          textStyle={styles.textStyle}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignSelf: 'center',
  },
  appLogo: {
    height: vw(150),
    width: vw(150),
    alignSelf: 'center',
    marginTop: vh(100),
  },
  veri: {
    fontWeight: '700',
    fontSize: vw(22),
    textAlign: 'center',
  },
  sent: {
    fontWeight: '600',
    fontSize: vw(12),
    textAlign: 'center',
    marginTop: vh(10),
  },
  pencil: {
    tintColor: 'white',
    height: vw(10),
    width: vw(10),
  },
  greenCircle: {
    height: vw(20),
    width: vw(20),
    borderRadius: vw(10),
    backgroundColor: constants.Colors.appButtonColor,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: vw(10),
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: vh(30),
  },
  number: {
    fontWeight: '600',
    fontSize: vw(12),
    textAlign: 'center',
  },
  saveButtonContainer: {
    width: vw(250),
    alignSelf: 'center',
    borderRadius: vw(30),
    backgroundColor: '#6a9589',
    paddingVertical: vh(15),
    marginTop: vh(30),
  },
  textStyle: {
    fontSize: vw(14),
    fontWeight: '600',
  },
});

export default OTPScreen;

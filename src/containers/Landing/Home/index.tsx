import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {vw, vh} from '../../../constants/Dimension';
import Header from '../../../component/Header';
import {useNavigation} from '@react-navigation/native';
import constants from '../../../constants';
import CustomTextInput from '../../../component/CustomTextInput';
import CustomButton from '../../../component/CustomButton';

const Home = () => {
  const onBackPress = () => {};
  const inputStyles = {
    width: vw(320),
    marginBottom: vh(10),
    backgroundColor: 'white',
    borderRadius: vw(10),
  };

  const renderRightButton = () => {
    return (
      <TouchableOpacity style={styles.backButtom}>
        <Image style={styles.iconColor} source={constants.Images.bell_icon} />
      </TouchableOpacity>
    );
  };
  const renderLeftButton = () => {
    return (
      <TouchableOpacity style={styles.backButtom}>
        <Text style={styles.headerTextStyle}>{'Home'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header
        renderRightButton={renderRightButton}
        renderLeftButton={renderLeftButton}
      />

      <View style={styles.innerContainner}>
        <CustomTextInput
          autoCapitalize="sentences"
          container={inputStyles}
          labelStyle={{color: 'white', fontWeight: '600'}}
          label={'Search Circles'}
          fieldName="accountNumber"
          keyboardType="default"
          icon={constants.Images.searchIcon}
          onChangeText={(type: string, val: string) => {}}
          isError
          iconStyle={styles.iconStyle}
        />

        <Text style={styles.activeCiclr}>{'Under Development !'}</Text>
        <CustomButton
          isDisabled={false}
          buttonText={'+ Create A Circle'}
          // handleAction={onPressSave}
          handleAction={() => {}}
          textStyle={styles.textStyle}
          customStyle={[
            styles.saveButtonContainer,
            {backgroundColor: constants.Colors.appButtonColor},
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  innerContainner: {
    flex: 1,
    marginTop: vh(20),
    alignSelf: 'center',
  },
  backButtom: {
    flexDirection: 'row',
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
  iconStyle: {
    alignSelf: 'center',
  },
  activeCiclr: {
    alignSelf: 'center',
    marginTop: vh(300),
    fontSize: vw(25),
    color: constants.Colors.appButtonColor,
    fontWeight: '600',
  },
  saveButtonContainer: {
    bottom: vh(15),
    width: vw(250),
    alignSelf: 'center',
    borderRadius: vw(30),
    position: 'absolute',
    backgroundColor: '#6a9589',
    paddingVertical: vh(14),
  },
  textStyle: {
    fontWeight: '600',
    fontSize: vw(14),
  },
});

export default Home;

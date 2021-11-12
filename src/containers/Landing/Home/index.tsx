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

  const renderView = () => {
    return (
      <View>
        <TouchableOpacity style={styles.containeer}>
          <Image style={styles.imageStyle} source={constants.Images.ellipse} />
          <View style={{marginLeft: vw(10)}}>
            <View>
              <Text style={styles.buy}>{'Buy Stocks Of Healthcare'}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: vh(7),
              }}>
              <Image
                resizeMode="contain"
                style={styles.caleder}
                source={constants.Images.calendar}
              />
              <Text
                style={{
                  fontSize: vw(12),
                  color: 'black',
                  marginLeft: vw(5),
                  fontWeight: '500',
                }}>
                {'Expiry-20/12/21'}
              </Text>
            </View>
          </View>
          <View style={{marginLeft: vw(30)}}>
            <Text style={styles.count}>{'20'}</Text>
            <View style={{flexDirection: 'row', marginTop: vh(7)}}>
              <Image
                style={[styles.imageRow, {position: 'absolute', left: 0}]}
                source={constants.Images.ellipse1}
              />
              <Image
                style={[
                  styles.imageRow,
                  {position: 'absolute', left: 10, zIndex: -50},
                ]}
                source={constants.Images.ellipse1}
              />
              <Image
                style={[
                  styles.imageRow,
                  {position: 'absolute', left: 15, zIndex: -60},
                ]}
                source={constants.Images.ellipse}
              />
              <Image
                style={[
                  styles.imageRow,
                  {position: 'absolute', left: 20, zIndex: -70},
                ]}
                source={constants.Images.ellipse3}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
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

        <Text style={styles.active}>{'Active Circle'}</Text>
        {renderView()}
        {renderView()}
        {renderView()}
        {renderView()}

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
  active: {
    fontSize: vw(16),
    color: 'black',
    fontWeight: '500',
    marginBottom: vh(5),
  },
  containeer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: vh(13),
    paddingHorizontal: vw(8),
    borderRadius: vw(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    marginVertical: vh(5),
  },
  imageStyle: {
    height: vw(38),
    width: vw(38),
  },
  imageRow: {
    height: vw(20),
    width: vw(20),
  },
  caleder: {
    height: vw(10),
    width: vw(10),
  },
  buy: {
    fontSize: vw(16),
    fontWeight: '600',
    color: 'black',
  },
  count: {
    color: 'black',
    fontSize: vw(16),
    fontWeight: '900',
  },
});

export default Home;

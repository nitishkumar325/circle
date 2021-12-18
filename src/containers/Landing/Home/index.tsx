import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {vw, vh} from '../../../constants/Dimension';
import Header from '../../../component/Header';
import {useNavigation} from '@react-navigation/native';
import constants from '../../../constants';
import CustomTextInput from '../../../component/CustomTextInput';
import CustomButton from '../../../component/CustomButton';
import {useDispatch} from 'react-redux';
import {getCircle} from '../../../modules/Auth';
import moment from 'moment';

const Home = () => {
  const dispatch = useDispatch();
  const [circle, setCircle] = React.useState([]);
  const navigation = useNavigation();
  const onBackPress = () => {};
  const inputStyles = {
    width: vw(340),
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

  React.useEffect(() => {
    dispatch(
      getCircle(
        (res: any) => {
          setCircle(res);
          console.log('res', res);
        },
        (err: any) => {
          console.log('err', err);
        },
      ),
    );
  }, []);

  const renderView = (item: any) => {
    return (
      <View style={{paddingHorizontal: vw(3), backgroundColor: '#fbfbfb'}}>
        <TouchableOpacity style={styles.containeer}>
          <Image style={styles.imageStyle} source={{uri: item?.circleImage}} />
          <View style={{marginLeft: vw(10), flex: 1}}>
            <View>
              <Text style={styles.buy}>{item.title}</Text>
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
                {`Expiry-  ${moment(item?.expiryDate).format('DD/MM/YYYY')}`}
              </Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{alignSelf: 'flex-end', marginRight: vw(30)}}>
              <Text style={styles.count}>{item?.member}</Text>
              <View style={{flexDirection: 'row', marginTop: vh(7)}}>
                {item && item?.memberImages && item.memberImages.length > 0 && (
                  <Image
                    style={[styles.imageRow, {position: 'absolute', left: 0}]}
                    source={{uri: item.memberImages[0]}}
                  />
                )}
                {item && item?.memberImages && item.memberImages.length > 1 && (
                  <Image
                    style={[
                      styles.imageRow,
                      {position: 'absolute', left: 10, zIndex: -50},
                    ]}
                    source={{uri: item.memberImages[1]}}
                  />
                )}
                {item && item?.memberImages && item.memberImages.length > 2 && (
                  <Image
                    style={[
                      styles.imageRow,
                      {position: 'absolute', left: 15, zIndex: -60},
                    ]}
                    source={{uri: item.memberImages[2]}}
                  />
                )}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fbfbfb', width: '100%'}}>
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
        <ScrollView>
          <View style={{marginBottom: vh(80)}}>
            {circle &&
              circle.length > 0 &&
              circle.map(item => renderView(item))}
          </View>
        </ScrollView>

        {/* {renderView()} */}

        <CustomButton
          isDisabled={false}
          buttonText={'+ Create A Circle'}
          // handleAction={onPressSave}
          handleAction={() => {
            navigation.navigate(constants.Screens.createCircle);
          }}
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
    backgroundColor: '#fbfbfb',
    paddingHorizontal: vw(16),
    marginBottom: vh(20),
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
    bottom: vh(0),
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
    marginBottom: vh(13),
    marginTop: vh(20),
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
    elevation: 2,
    marginVertical: vh(5),
  },
  imageStyle: {
    height: vw(38),
    width: vw(38),
    borderRadius: vw(19),
  },
  imageRow: {
    height: vw(20),
    width: vw(20),
    borderRadius: vw(10),
  },
  caleder: {
    height: vw(15),
    width: vw(15),
  },
  buy: {
    fontSize: vw(16),
    fontWeight: '600',
    color: 'black',
    flex: 1,
  },
  count: {
    color: 'black',
    fontSize: vw(16),
    fontWeight: '900',
  },
});

export default Home;

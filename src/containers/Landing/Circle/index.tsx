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

const Home = () => {
  const onBackPress = () => {};

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
        <Text style={styles.headerTextStyle}>{'Circle'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header renderLeftButton={renderLeftButton} />

      <View style={styles.innerContainner}>
        <Text style={styles.activeCiclr}>{'Under Development !'}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  innerContainner: {
    flex: 1,
    marginTop: vh(100),
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
  activeCiclr: {
    alignSelf: 'center',
    marginTop: vh(300),
    fontSize: vw(25),
    color: constants.Colors.appButtonColor,
    fontWeight: '600',
  },
});

export default Home;

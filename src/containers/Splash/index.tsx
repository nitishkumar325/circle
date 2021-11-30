import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import constants from '../../constants';
import {vw} from '../../constants/Dimension';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

const Splash = () => {
  const {isLogin} = useSelector((state: {Auth: any}) => ({
    isLogin: state.Auth.isLogin,
  }));

  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      isLogin
        ? navigation.navigate(constants.Screens.Landing)
        : navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.parent}>
        <Image style={styles.logoSize} source={constants.Images.AppLogo} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: '#fa811e',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoSize: {
    height: vw(250),
    width: vw(250),
  },
});

export default Splash;

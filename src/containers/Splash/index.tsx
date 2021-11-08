import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import constants from '../../constants';
import {vw} from '../../constants/Dimension';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
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

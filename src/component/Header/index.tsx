import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import constants from '../../constants';
import {vw, vh} from '../../constants/Dimension';

interface Props {
  headerText: any;
  onBackPress: Function;
}

const Header = ({headerText = 'OTP', onBackPress = () => {}}: Props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress}>
        <Image style={styles.iconColor} source={constants.Images.back} />
      </TouchableOpacity>

      <Text style={styles.headerTextStyle}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: constants.Colors.appthemeColor,
    borderBottomLeftRadius: vw(30),
    flexDirection: 'row',
    paddingLeft: vw(20),
    paddingVertical: vh(25),
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

export default Header;

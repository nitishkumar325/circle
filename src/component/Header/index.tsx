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
const noop = () => {};

interface Props {
  renderRightButton?(): JSX.Element;
  renderLeftButton?(): JSX.Element;
  contentContainerStyle?: ViewStyle;
  customStyle?: any;
}

const Header = ({
  renderRightButton = noop,
  renderLeftButton = noop,
  contentContainerStyle = {},
  customStyle = {},
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        contentContainerStyle,
        styles.header,
        customStyle,
      ]}>
      {renderLeftButton()}
      {renderRightButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: constants.Colors.appthemeColor,
    borderBottomLeftRadius: vw(30),
    flexDirection: 'row',
    paddingLeft: vw(20),
    paddingVertical: vh(10),
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
  container: {
    height: constants.Normalise(60),
    flexDirection: 'row',
    paddingHorizontal: constants.vw(16),
    justifyContent: 'space-between',
    paddingTop: vh(16),
  },
});

export default Header;

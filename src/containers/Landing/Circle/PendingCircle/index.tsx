import React from 'react';
import {View, Text} from 'react-native';
import constants from '../../../../constants';
import {vw} from '../../../../constants/Dimension';

const PendingCircle = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fbfbfb', alignContent: 'center'}}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: '50%',
          color: constants.Colors.appButtonColor,
          fontSize: vw(30),
          fontWeight: '600',
        }}>
        {'Under Develoment !'}
      </Text>
    </View>
  );
};

export default PendingCircle;

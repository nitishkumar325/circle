import {StyleSheet} from 'react-native';
import constants from '../../constants';
import {vw, vh, normalize} from '../../constants/Dimension';

export default StyleSheet.create({
  container: {
    width: '90%',
    borderWidth: 1,
    flexDirection: 'row',
    height: normalize(40),
    borderColor: constants.Colors.border,
    borderRadius: normalize(4),
    justifyContent: 'space-between',
    paddingHorizontal: normalize(13),
    backgroundColor: constants.Colors.backgroundTextInputColor,
  },
  textInputLabel: {
    textAlign: 'left',
    fontSize: normalize(14),
    marginTop: normalize(13),
    marginBottom: normalize(8),
  },
  passwordIconContainer: {
    width: vw(20),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eye: {
    width: vw(25),
    height: vh(25),
  },
  textInput: {
    flex: 0,
    fontWeight: '500',
    textAlign: 'left',
    width: normalize(300),
    fontSize: normalize(12),
    color: constants.Colors.blackText,
    paddingVertical: vh(12),
    textAlignVertical: 'top',
    paddingLeft: vw(10),
  },
  errorStyle: {
    borderWidth: 1,
    color: constants.Colors.red,
    borderColor: constants.Colors.red,
  },
  errorWithOutStyle: {
    color: constants.Colors.border,
    borderColor: constants.Colors.borderSelected,
  },
  errorText: {
    color: constants.Colors.red,
    textAlign: 'left',
    left: normalize(5),
    width: normalize(300),
    fontSize: normalize(16),
    marginVertical: normalize(6),
  },
  starStyle: {
    color: constants.Colors.red,
  },
  borderRedError: {
    borderWidth: 1,
    borderColor: constants.Colors.red,
  },
  alignTop: {
    bottom: 0,
    right: -10,
    position: 'absolute',
    color: constants.Colors.textColor1,
  },
  optionalStyle: {
    fontSize: vw(14),
    color: constants.Colors.textColor1,
  },
});

import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {vw, vh} from '../../../constants/Dimension';
import Header from '../../../component/Header';
import {useNavigation} from '@react-navigation/native';
import constants from '../../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {setIntialState, setLoginBoolean} from '../../../modules/Auth';
import Router from '../../../navigator/routes';
import Utils from '../../../Utils';

const Home = () => {
  const dispatch = useDispatch();

  const {email, name, phone, avatar} = useSelector((state: {Auth: any}) => ({
    email: state.Auth.email,
    name: state.Auth.name,
    phone: state.Auth.phone,
    avatar: state.Auth.avatar,
  }));

  const navigation = useNavigation();
  const DATA = [
    {
      icon: constants.Images.profile_pencil,
      title: 'Edit Profile',
      forward: constants.Screens.EditProfile,
      id: 0,
    },
    {
      icon: constants.Images.profile_pencil,
      title: 'Reset Password',
      forward: constants.Screens.ResetPasswordLogin,
      id: 1,
    },
    {
      icon: constants.Images.lock,
      title: 'Privacy & Security',
      forward: '',
      id: 2,
    },
    {
      icon: constants.Images.help_icon,
      title: 'Help',
      forward: constants.Screens.Help,
      id: 4,
    },
    {
      icon: constants.Images.lock,
      title: 'Logout',
      forward: '',
      id: 3,
    },
  ];

  const onLogoutPress = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to exit ?',
      [
        {text: 'Cancel', onPress: () => {}},
        {
          text: 'OK',
          onPress: () => {
                dispatch(setIntialState());
                Router.resetNew(navigation, constants.Screens.Login, {
                  type: 'Login',
                });
          },
        },
      ],
      {cancelable: false},
    );
  };

  // Utils.CommonFunctions.singleButton(
  //   'Are you sure you want to exit ?',
  //   'Logout',
  //   () => {
  //     dispatch(setIntialState());
  //     Router.resetNew(navigation, constants.Screens.Login, {
  //       type: 'Login',
  //     });
  //   },
  // );
  // dispatch(setLoginBoolean(false));

  const renderItemList = (item: any) => {
    const {icon, title, forward, id} = item;
    return (
      <TouchableOpacity
        onPress={() =>
          id === 3
            ? onLogoutPress()
            : forward != '' && navigation.navigate(forward)
        }
        style={[
          styles.row,
          {marginHorizontal: vw(30), marginVertical: vh(20), marginTop: vh(20)},
        ]}>
        <View style={styles.circle}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={styles.iconStyle}
            source={icon}
          />
        </View>
        <Text style={styles.title}>{title}</Text>
        {id !== 3 && (
          <TouchableOpacity>
            <Image
              style={styles.rightArrow}
              source={constants.Images.right_Arrow}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  };
  const renderLeftButton = () => {
    return (
      <TouchableOpacity style={styles.backButtom}>
        <Text style={styles.headerTextStyle}>{'Profile'}</Text>
      </TouchableOpacity>
    );
  };

  const onButtonEdit = () => {
    navigation.navigate(constants.Screens.EditProfilePicture);
  };

  const renderProfileSection = () => {
    return (
      <View style={styles.innerIcon}>
        <View style={styles.width}>
          {avatar === null ? (
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={constants.Images.ic_placeholder}
            />
          ) : (
            <Image style={styles.imageStyle} source={{uri: avatar}} />
          )}
          <TouchableOpacity onPress={onButtonEdit} style={styles.whiteCircle}>
            <Image style={styles.pencil} source={constants.Images.app_Pencil} />
          </TouchableOpacity>
        </View>
        <View style={[styles.alignRow, styles.marginLeft20]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text numberOfLines={1} style={styles.userName}>
              {name?.length != '' ? name : 'Jhon Dhoe'}
            </Text>
            <View style={styles.appGreenCircle}>
              <Image
                style={styles.pencilWhite}
                source={constants.Images.app_Pencil}
              />
            </View>
          </View>
          <Text style={styles.userEmail}>
            {email?.length != '' ? email : 'jhon.doe@gmail.com'}
          </Text>
          <Text style={styles.userEmail}>
            {phone?.length != '' ? phone : 'N/A'}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.innerContainner}>
        <View style={styles.header}>
          <Header renderLeftButton={renderLeftButton} />
          {renderProfileSection()}
        </View>
        {DATA.map(item => renderItemList(item))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  innerContainner: {
    flex: 1,
  },
  backButtom: {
    flexDirection: 'row',
    marginLeft: vw(10),
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
  },
  header: {
    backgroundColor: constants.Colors.appthemeColor,
    borderBottomLeftRadius: vw(100),
    height: vh(300),
    width: '100%',
  },
  activeCiclr: {
    alignSelf: 'center',
    marginTop: vh(300),
    fontSize: vw(25),
    color: constants.Colors.appButtonColor,
    fontWeight: '600',
  },
  customStyle: {
    height: vh(272),
  },
  imageStyle: {
    height: vw(140),
    width: vw(140),
    borderWidth: 3,
    borderRadius: vw(70),
  },
  whiteCircle: {
    height: vw(30),
    width: vw(30),
    backgroundColor: 'white',
    borderRadius: vw(15),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  pencil: {
    height: vw(12),
    width: vw(12),
  },
  innerIcon: {
    marginLeft: vw(20),
    marginTop: vh(20),
    flexDirection: 'row',
  },
  width: {
    width: vw(140),
  },
  alignRow: {
    alignContent: 'center',
    alignSelf: 'center',
  },
  pencilWhite: {
    tintColor: 'white',
    height: vw(8),
    width: vw(8),
  },
  appGreenCircle: {
    height: vw(19),
    width: vw(19),
    backgroundColor: constants.Colors.appButtonColor,
    borderRadius: vw(9),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: vw(5),
  },
  marginLeft20: {
    marginLeft: vw(20),
  },
  userName: {
    fontSize: vw(22),
    fontWeight: 'bold',
    maxWidth: vw(200),
    color: 'white',
  },
  userEmail: {
    fontSize: vw(16),
    fontWeight: '400',
    maxWidth: vw(200),
    marginTop: vh(10),
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: vw(35),
    width: vw(35),
    borderRadius: vw(35 / 2),
    backgroundColor: constants.Colors.appthemeColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    height: vw(12),
    width: vw(12),
    tintColor: 'white',
  },
  title: {
    fontSize: vw(16),
    marginLeft: vw(10),
    color: '#373737',
    width: vw(147),
  },
  rightArrow: {
    height: vw(6),
    width: vw(6),
    marginLeft: vw(110),
  },
});

export default Home;

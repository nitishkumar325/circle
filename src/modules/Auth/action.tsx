import * as Actions from './types';
import utils from '../../Utils';
import constants from '../../constants';
import {Alert} from 'react-native';

export const setLoginBoolean = (status: any) => {
  return (dispatch: Function) => {
    dispatch({
      type: Actions.SET,
      payload: {
        isLogin: status,
      },
    });
  };
};

export const OTPConfirm = (params: Object, callback?: any, Fail?: Function) => {
  return (dispatch: any, getState: Function) => {
    dispatch({
      type: Actions.Loder,
      payload: {
        authLoder: true,
      },
    });
    utils.Services.postApiCall(
      utils.EndPoint.otpconfirm,
      {
        ...params,
      },
      (res: any) => {
        let data = res.data;
        if (data.status === 200) {
          callback();
          dispatch({
            type: Actions.Loder,
            payload: {
              authLoder: false,
            },
          });
        } else {
          Fail && Fail();
          let message = data.message;
          utils.CommonFunctions.showSnackbar(message, constants.Colors.black);
        }
      },
      (err: any) => {
        dispatch({
          type: Actions.Loder,
          payload: {
            authLoder: false,
          },
        });
        Fail && Fail();
        let message = err.data.message;
        utils.CommonFunctions.showSnackbar(message, constants.Colors.black);
      },
    );
  };
};

export const userLogin = (params: Object, callback?: any, Fail?: Function) => {
  return (dispatch: any, getState: Function) => {
    dispatch({
      type: Actions.Loder,
      payload: {
        authLoder: true,
      },
    });
    utils.Services.postApiCall(
      utils.EndPoint.login,
      {
        ...params,
      },
      (res: any) => {
        let data = res.data;
        if (data.status === 200) {
          callback();
          dispatch({
            type: Actions.Loder,
            payload: {
              authLoder: false,
            },
          });
        } else {
          // Fail && Fail(res);
          utils.CommonFunctions.showSnackbar('error', constants.Colors.black);
        }
      },
      (err: any) => {
        console.log('errro', err);
        dispatch({
          type: Actions.Loder,
          payload: {
            authLoder: false,
          },
        });
        // Fail && Fail(err);
        utils.CommonFunctions.showSnackbar(err, constants.Colors.black);
      },
    );
  };
};

export const forgetPassword = (
  params: Object,
  callback?: any,
  Fail?: Function,
) => {
  return (dispatch: any, getState: Function) => {
    dispatch({
      type: Actions.Loder,
      payload: {
        authLoder: true,
      },
    });
    utils.Services.postApiCall(
      utils.EndPoint.forget,
      {
        ...params,
      },
      (res: any) => {
        let data = res.data;
        if (data.status === 200) {
          callback();
          dispatch({
            type: Actions.Loder,
            payload: {
              authLoder: false,
            },
          });
        } else {
          // Fail && Fail();
          // let message = data.message;
          utils.CommonFunctions.showSnackbar('error', constants.Colors.black);
        }
      },
      (err: any) => {
        console.log('errro', err);
        dispatch({
          type: Actions.Loder,
          payload: {
            authLoder: false,
          },
        });
        Fail && Fail(err);
        // let message = err.data.message;
        utils.CommonFunctions.showSnackbar('error', constants.Colors.black);
      },
    );
  };
};

export const resetPassword = (
  params: Object,
  callback?: any,
  Fail?: Function,
) => {
  return (dispatch: any, getState: Function) => {
    dispatch({
      type: Actions.Loder,
      payload: {
        authLoder: true,
      },
    });
    utils.Services.postApiCall(
      utils.EndPoint.resetPassword,
      {
        ...params,
      },
      (res: any) => {
        let data = res.data;
        if (data.status === 200) {
          callback();
          dispatch({
            type: Actions.Loder,
            payload: {
              authLoder: false,
            },
          });
        } else {
          Fail && Fail();
          let message = data.message;
          utils.CommonFunctions.showSnackbar(message, constants.Colors.black);
        }
      },
      (err: any) => {
        console.log('errro', err);
        dispatch({
          type: Actions.Loder,
          payload: {
            authLoder: false,
          },
        });
        Fail && Fail();
        let message = err?.data?.message;
        utils.CommonFunctions.showSnackbar(message, constants.Colors.black);
      },
    );
  };
};

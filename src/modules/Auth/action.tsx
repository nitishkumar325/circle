import * as Actions from './types';
import utils from '../../Utils';
import constants from '../../constants';

export const updateName = (str: string) => {
  return (dispatch: Function) => {
    dispatch({
      type: Actions.SET,
      payload: {
        name: 'Hello',
      },
    });
  };
};

export const OTPConfirm = (params: Object, callback?: any, Fail?: Function) => {
  return (dispatch: any, getState: Function) => {
    const {isConnected} = getState().GlobalReducer;
    const {bookingSummary} = getState().Booking;
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
        let data = res.data.data;
        callback();
        dispatch({
          type: Actions.Loder,
          payload: {
            authLoder: false,
          },
        });
      },
      (err: any) => {
        dispatch({
          type: Actions.Loder,
          payload: {
            authLoder: false,
          },
        });
        Fail && Fail();
        let message = err.data.body;
        utils.CommonFunctions.showSnackbar(message, constants.Colors.black);
      },
    );
  };
};

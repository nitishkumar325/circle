import * as Actions from './types';
const initialState = {
  name: '',
  authLoder:false,
};

const AuthReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.SET:
      return {...state, ...action.payload};
    case Actions.Loder:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default AuthReducer;

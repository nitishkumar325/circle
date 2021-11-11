import {combineReducers} from 'redux';
import Auth from '../modules/Auth/reducer';
export interface AppState {
  Auth: any;
}

export default combineReducers<AppState>({
  Auth,
});

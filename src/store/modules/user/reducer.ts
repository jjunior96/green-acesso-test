import { Reducer } from 'redux';
import { IUserState } from './types';

const INITIAL_STATE: IUserState = {
  name: ''
};

const user: Reducer<IUserState> = () => {
  return INITIAL_STATE;
};

export default user;

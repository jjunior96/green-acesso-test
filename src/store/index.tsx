import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { IUserState } from './modules/user/types';

export interface UserProps {
  name: string;
}

export interface IState {
  user: IUserState;
}

export const store = createStore(rootReducer);

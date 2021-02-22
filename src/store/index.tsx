import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';
import { IUser } from './modules/user/types';

export interface IState {
  user: IUser;
}

export const store = createStore(rootReducer);

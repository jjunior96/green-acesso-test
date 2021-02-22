import { Reducer } from 'redux';
import produce from 'immer';
import { IUser } from './types';

const INITIAL_STATE: IUser = {
  id: 1,
  name: 'Soon Sam',
  login: 'soonsam'
};

const user: Reducer<IUser> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'LOGIN_ON_APP': {
        const result = draft;

        return result;
      }

      default: {
        return draft;
      }
    }
  });
};

export default user;

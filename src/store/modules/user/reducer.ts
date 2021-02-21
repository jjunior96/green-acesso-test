import { Reducer } from 'redux';
import { IUserState } from './types';

const INITIAL_STATE: IUserState = {
  name: 'Soon Sam'
};

const user: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_NAME_TO_USER': {
      const { name } = action.payload;

      return {
        name: name
      };
    }

    default: {
      return state;
    }
  }
};

export default user;

import { IUser } from './types';

export function loginOnApp(user: IUser) {
  return {
    type: 'LOGIN_ON_APP',
    payload: {
      user
    }
  };
}

/* eslint-disable @typescript-eslint/ban-types */
export interface IUser {
  id: number;
  name: string;
  login: string;
}

export interface IUsers {
  users: IUser[];
}

import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

export interface UserProps {
  name: string;
}

export const store = createStore(rootReducer);

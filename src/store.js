import { createStore } from 'redux';
import itemsReducer from './reducers';

export default createStore(itemsReducer);

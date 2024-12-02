import { legacy_createStore as createStore}  from 'redux';
import rootReducer from './reducers/index';

// create the store
const store = createStore(rootReducer);
window.store = store;

export default store;
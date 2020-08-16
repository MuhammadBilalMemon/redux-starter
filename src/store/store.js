import { createStore } from 'redux';
import reducer from '../reducers/reducers'
import { devToolsEnhancer } from "redux-devtools-extension";

//  its also the higher order function
const store = createStore(reducer, devToolsEnhancer({ trace: true }));

export default store;
import { createStore } from 'redux';
import reducer from '../reducers/reducers'

//  its also the higher order function
const store = createStore(reducer);

export default store;
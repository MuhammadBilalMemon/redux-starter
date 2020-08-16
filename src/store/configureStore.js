import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducers'

export default function () {
    //  its also the higher order function
    const store = configureStore({
        reducer
    });
    return store;
};
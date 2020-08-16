import { configureStore } from "@reduxjs/toolkit";

// import { createStore } from 'redux';
import reducer from './bugs'
// import { devToolsEnhancer } from "redux-devtools-extension";


export default function () {
    //  its also the higher order function
    const store = configureStore({
        reducer
    });
    return store;
};
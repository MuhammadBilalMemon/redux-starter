import { configureStore } from "@reduxjs/toolkit";

import reducer from './bugs'

export default function () {
    //  its also the higher order function
    const store = configureStore({
        reducer
    });
    return store;
};
import { configureStore } from "@reduxjs/toolkit";
import reducer from './projects'

export default function () {
    //  its also the higher order function
    const store = configureStore({
        reducer
    });
    return store;
};
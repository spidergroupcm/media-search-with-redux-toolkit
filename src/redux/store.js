import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './fetchers/searchClice'



export const store = configureStore({
    reducer : {
        search : searchReducer

    }
})



import { configureStore } from "@reduxjs/toolkit";
import reducers from './redcers';

export const store = configureStore({
    reducer: reducers
});
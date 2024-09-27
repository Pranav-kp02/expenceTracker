// store.js
import { configureStore } from '@reduxjs/toolkit';
import inputDataReducer from './inputData'; 

const store = configureStore({
    reducer: {
        input: inputDataReducer,
    },
});

export default store;

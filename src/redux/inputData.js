import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    nextId: 1
};

const inputData = createSlice({
    name: "input",
    initialState,
    reducers: {
        getInputData: (state, action) => {
            const item = action.payload;
            const existingIndex = state.data.findIndex(existingItem => existingItem.id === item.id);
            if (existingIndex >= 0) {
                state.data[existingIndex] = item;
            } else {
                if (item.id === undefined) {
                    item.id = state.nextId;
                    state.nextId += 1;
                }
                state.data.push(item);
            }
        },
        deleteInputData: (state, action) => {
            const idToDelete = action.payload;
            state.data = state.data.filter(item => item.id !== idToDelete);
        }
    }
});

export const { getInputData, deleteInputData } = inputData.actions;

export const selectTotalExpense = (state) => {
    return state.input.data.reduce((sum, item) => sum + (item.amount || 0), 0);
};

export default inputData.reducer;

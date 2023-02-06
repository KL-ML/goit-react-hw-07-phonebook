const { createSlice } = require("@reduxjs/toolkit");
const { formInitState } = require("./form.init-state");

const formSlice = createSlice({
    name: 'form',
    initialState: formInitState,
    reducers: {
        nameAction: (state, { payload }) => {
            state.name = payload;
        },
        resetNameAction: (state, { payload }) => {
            state.name = formInitState.name;
        },
        numberAction: (state, { payload }) => {
            state.number = payload;
        },
        resetNumberAction: (state, { payload }) => {
            state.number = formInitState.number;
        }
    }
});

export const { nameAction, resetNameAction, numberAction, resetNumberAction } = formSlice.actions;
export const formReducer = formSlice.reducer;
import { getContactsThunk } from "./contacts.thunk";

const { createSlice } = require("@reduxjs/toolkit");
const { contactsInitState } = require("./contacts.init-state");


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        filterInputAction: (state, { payload }) => {
            state.filter = payload;
        },
        setContactsAction: (state, { payload }) => {
            state.contacts = [...state.contacts, payload];
        },
        deleteContactsAction: (state, { payload }) => {
            state.contacts = state.contacts.filter(c => c.id !== payload);
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getContactsThunk.pending, state => {
                console.log('pending');
            })
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                console.log('fulfilled');
                console.log('payload: ', payload);
                state.contacts = payload;
            })
            .addCase(getContactsThunk.rejected, state => {
                console.log('rejected');
            })
    },
});

export const { filterInputAction, setContactsAction, deleteContactsAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
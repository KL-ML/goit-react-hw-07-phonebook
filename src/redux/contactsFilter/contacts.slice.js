import { fetchContacts, addContact, deleteContact } from "./contacts.thunk";

const { createSlice } = require("@reduxjs/toolkit");
const { contactsInitState } = require("./contacts.init-state");

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        filterInputAction: (state, { payload }) => {
            state.filter = payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.contacts.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, { payload }) => {
                state.contacts.items = payload;
                state.contacts.isLoading = false;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.rejected, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = payload;
            })
            .addCase(addContact.pending, state => {
                state.contacts.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.contacts.items.push(payload);
                state.contacts.isLoading = false;
                state.contacts.error = null;
            })
            .addCase(addContact.rejected, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = payload;
            })
            .addCase(deleteContact.pending, state => {
                state.contacts.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                const idx = state.contacts.items.findIndex(
                    item => item.id === payload.id
                );
                state.contacts.items.splice(idx, 1);
                state.contacts.isLoading = false;
                state.contacts.error = null;
            })
            .addCase(deleteContact.rejected, (state, { payload }) => {
                state.contacts.isLoading = false;
                state.contacts.error = payload;
            })
    },
});

export const { filterInputAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
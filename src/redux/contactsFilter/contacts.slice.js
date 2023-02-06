import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const { createSlice } = require("@reduxjs/toolkit");
const { contactsInitState } = require("./contacts.init-state");

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitState,
    reducers: {
        filterInputAction: (state, {payload}) => {
            state.filter = payload;
        },
        setContactsAction: (state, {payload}) => {
            state.contacts = [...state.contacts, payload];
        },
        deleteContactsAction: (state, {payload}) => {
            state.contacts = state.contacts.filter(c => c.id !== payload);
        },
    }
});

const persistConfig = {
    key: 'phonebook',
    storage,
    whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { filterInputAction, setContactsAction, deleteContactsAction } = contactsSlice.actions;
export const contactsReducer = persistedReducer;
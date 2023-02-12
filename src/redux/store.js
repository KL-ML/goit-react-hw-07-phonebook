import { configureStore } from "@reduxjs/toolkit";


import { formInitState } from "./contactForm/form.init-state";
import { formReducer } from "./contactForm/form.slice";
import { contactsInitState } from "./contactsFilter/contacts.init-state";
import { contactsReducer } from "./contactsFilter/contacts.slice";

const initState = {
    form: formInitState,
    contacts: contactsInitState,
};

export const store = configureStore({
    preloadedState: initState,
    reducer: {
        form: formReducer,
        contacts: contactsReducer,
    },
    devTools: true,
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
});

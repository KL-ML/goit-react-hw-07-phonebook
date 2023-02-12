
export const contactsInitState = {
    filter: '',
    contacts: {
        items: [],
        isLoading: false,
        error: null,
    },
};

// Используй функцию createAsyncThunk для объявления асинхронный генераторов экшенов и выполнения HTTP-запросов. Обработку экшенов и изменение данных в состоянии Redux сделай при помощи createSlice.

// Объяви следующие операции:

// fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип экшена "contacts/fetchAll".
// addContact - добавление контакта (метод POST). Базовый тип экшена "contacts/addContact".
// deleteContact - удаление контакта (метод DELETE). Базовый тип экшена "contacts/deleteContact".
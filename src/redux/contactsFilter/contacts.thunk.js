import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = "https://63e10cb6dd7041cafb3fc6e4.mockapi.io";


export const getContactsThunk = createAsyncThunk(
    'contacts',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
        
    }
);
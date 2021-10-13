import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const {data} = await axios.get('http://localhost:3000/contacts');
        return data;
    }
)

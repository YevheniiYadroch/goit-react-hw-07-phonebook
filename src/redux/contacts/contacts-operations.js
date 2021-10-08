import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const {data} = await axios.get('http://localhost:3000/contacts');
        return data;
    }
)

export const pushContacts = createAsyncThunk(
    'contacts/pushContacts',
    async (contacts) => {
        const { data } = await axios.get('http://localhost:3000/contacts');
        if (contacts.length > data.length) {
            await axios.post('http://localhost:3000/contacts', contacts[contacts.length - 1]);
        }
    }
)
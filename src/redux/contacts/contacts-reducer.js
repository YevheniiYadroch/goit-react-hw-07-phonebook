import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import { fetchContacts } from './contacts-operations';
import axios from 'axios';

const filterReducer = createReducer('', {
    [actions.searchContact]: (_, { payload }) => (payload.currentTarget.value)
})

const itemsReducer = createReducer([], {
    [actions.addContact]: (state, { payload }) => {
        const id = uuidv4();
        axios.post('http://localhost:3000/contacts', {id: id, name: payload.target.children.name.value, number: payload.target.children.number.value});
        return [
            ...state,
            { id: id, name: payload.target.children.name.value, number: payload.target.children.number.value }
        ];
    },
    [actions.deleteContact]: (state, { payload }) => {
        axios.delete(`http://localhost:3000/contacts/${payload.target.dataset.id}`)
        return state.filter(item => item.id !== payload.target.dataset.id);
    },
    [fetchContacts.fulfilled]: (_, action) => action.payload,
})

const isLoadingReducer = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
})

const errorReducer = createReducer(null, {
    [fetchContacts.rejected]: (_, action) => action.payload,
    [fetchContacts.pending]: () => null,
})

export default combineReducers({
    items: itemsReducer,
    filter: filterReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
});
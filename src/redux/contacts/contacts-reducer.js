import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';
import { fetchContacts, pushContacts } from './contacts-operations';
import axios from 'axios';

const filterReducer = createReducer('', {
    [actions.searchContact]: (_, { payload }) => (payload.currentTarget.value)
})

const itemsReducer = createReducer([], {
    [actions.addContact]: (state, { payload }) => {
            payload.preventDefault();
            const form = payload.target;
            if (state.some(item => item.name === payload.target.children.name.value)) {
                alert(`${payload.target.children.name.value} is already in contacts`);
                form.reset();
                return;
            }
            const newState = [
                ...state,
                { id: uuidv4(), name: payload.target.children.name.value, number: payload.target.children.number.value }
            ];
            form.reset();
            return newState;
    },
    [actions.deleteContact]: (state, { payload }) => {
        axios.delete(`http://localhost:3000/contacts/${payload.target.dataset.id}`)
        return state.filter(item => item.id !== payload.target.dataset.id);
    },
    [fetchContacts.fulfilled]: (_, action) => action.payload,
    [pushContacts.fulfilled]: (_, action) => action.payload,
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
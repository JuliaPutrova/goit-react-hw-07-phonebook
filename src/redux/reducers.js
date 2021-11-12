import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { filterContact } from './actions';
import { fetchContact, addContact, deleteContact } from './operation';

// import {
//   fetchContactSuccess,
//   fetchContactRequest,
//   fetchContactError,
//   addContactSucess,
//   addContactRequest,
//   addContactError,
//   deleteContactSuccess,
//   deleteContactRequest,
//   deleteContactError,
// } from './actions';

// const items = createReducer([], {
//   [fetchContactSuccess]: (state, action) => action.payload,
//   [addContactSucess]: (state, action) => [action.payload, ...state],
//   [deleteContactSuccess]: (state, action) =>
//     state.filter(contact => contact.id !== action.payload),
// });

// const loading = createReducer(false, {
//   [fetchContactSuccess]: () => false,
//   [fetchContactRequest]: () => true,
//   [fetchContactError]: () => false,
//   [addContactSucess]: () => false,
//   [addContactRequest]: () => true,
//   [addContactError]: () => false,
//   [deleteContactSuccess]: () => false,
//   [deleteContactRequest]: () => true,
//   [deleteContactError]: () => false,
// });

////////перепишем reducers, т.к. применили createAsyncThunk при создании операций
const items = createReducer([], {
  [fetchContact.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [action.payload, ...state],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const loading = createReducer(false, {
  [fetchContact.fulfilled]: () => false,
  [fetchContact.pending]: () => true,
  [fetchContact.rejected]: () => false,
  [addContact.fulfilled]: () => false,
  [addContact.pending]: () => true,
  [addContact.rejected]: () => false,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {});

const filter = createReducer('', {
  [filterContact]: (_, action) => action.payload,
});

const rootReducer = combineReducers({
  items,
  loading,
  error,
  filter,
});

export default rootReducer;

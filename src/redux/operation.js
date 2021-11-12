import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

axios.defaults.baseURL = 'https://61864f10cd8530001765aa50.mockapi.io/api/v1';

// export const fetchContact = () => async dispatch => {
//   dispatch(fetchContactRequest());

//   try {
//     const response = await axios.get('/contacts');
//     // console.log(response);
//     dispatch(fetchContactSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };

// export const addContact =
//   ({ name, number }) =>
//   async dispatch => {
//     const newContact = {
//       name,
//       number,
//     };

//     dispatch(addContactRequest());

//     try {
//       const response = await axios.post('/contacts', newContact);
//       dispatch(addContactSucess(response.data));
//     } catch (error) {
//       dispatch(addContactError(error));
//     }
//   };

// export const deleteContact = contactId => async dispatch => {
//   dispatch(deleteContactRequest());

//   try {
//     await axios.delete(`/contacts/${contactId}`);
//     dispatch(deleteContactSuccess(contactId));
//   } catch (error) {
//     dispatch(deleteContactError(error));
//   }
// };

///////////перепишем на createAsyncThunk
export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async () => {
    fetchContact.pending();

    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      fetchContact.rejected(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, number }) => {
    const newContact = {
      name,
      number,
    };

    const response = await axios.post('/contacts', newContact);
    return response.data;
  },
);

export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async contactId => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  },
);

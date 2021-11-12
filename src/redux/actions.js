import { createAction } from '@reduxjs/toolkit';

export const fetchContactSuccess = createAction('contact/fetchContactSuccess');
export const fetchContactRequest = createAction('contact/fetchContactRequest');
export const fetchContactError = createAction('contact/fetchContactError');

export const addContactSucess = createAction('contact/addContactSucess');
export const addContactRequest = createAction('contact/addContactRequest');
export const addContactError = createAction('contact/addContactError');

export const deleteContactSuccess = createAction(
  'deleteContact/deleteContactSuccess',
);
export const deleteContactRequest = createAction(
  'deleteContact/deleteContactRequest',
);
export const deleteContactError = createAction(
  'deleteContact/deleteContactError',
);

export const filterContact = createAction('contacts/filterContact');

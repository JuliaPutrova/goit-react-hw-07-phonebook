import { createSelector } from 'reselect';

export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const isLoading = state => state.contacts.loading;

export const onFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

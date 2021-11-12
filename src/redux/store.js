import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: { contacts: rootReducer },
  devTools: true,
});

export default store;

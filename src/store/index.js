import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  console.log(JSON.stringify(state, null, 2));
});

import { configureStore } from "@reduxjs/toolkit";
import addPostReducers from '../redux/reducers/postReducers';

export const store = configureStore({
  reducer: { post:addPostReducers},
});




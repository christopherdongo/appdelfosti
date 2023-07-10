import {createSlice} from '@reduxjs/toolkit';
import { ItemData } from '../../types/types';


const INITIAL_STATE = {
  loading: false,
  post: [] as ItemData[],
  reload: false,
};

const postSlice = createSlice({
  name: 'post',
  initialState: INITIAL_STATE,
  reducers: {
    reloadPost: (state, action) => {
      state.reload = action.payload;
    },
    addPost: (state, action) => {
      state.post = action.payload;
    },
    createPost: (state, action) => {
      return {
        ...state,
        post: [...state.post, {...action.payload}],
      };
    },
    updatePost: (state, action) => {
      return {
        ...state,
        post: state.post.map((item: any) => {
          if (item.id === action.payload.id) {
            item = {...item, Likes: action.payload.Likes};
          }
          return item;
        }),
      };
    },
  },
});

export const {addPost, createPost, updatePost, reloadPost} = postSlice.actions;

export default postSlice.reducer;

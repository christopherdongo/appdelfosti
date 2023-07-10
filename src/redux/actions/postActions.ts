
import {addPost,createPost,updatePost, reloadPost} from '../reducers/postReducers';
import {readHooks} from '../../hooks/ReadHook';
import { AppDispatch, ItemData, typePostUpdate } from '../../types/types';

const {saveData,updateData} = readHooks();

export const addPostData= (data: ItemData) => (dispatch: AppDispatch ) => {
    dispatch(addPost(data));
}

export const updatePostData = (data:typePostUpdate)=>(dispatch: AppDispatch) => {
    updateData(data)
    dispatch(updatePost(data))
    dispatch(reloadPost(true))
}

export const createPostData = (data:ItemData)=>(dispatch: AppDispatch) => { 
  saveData(data);
  dispatch(createPost(data));
}

export const reloadPostRender=()=>(dispatch: AppDispatch) => {
    dispatch(reloadPost(false));
}
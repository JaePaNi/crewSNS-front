import {configureStore, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    title: '',
    content: '',
    images: []
}

const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    reducers: {
        imageUpload: ((state, action) => {
            console.log(action.payload);
        }),
        postContentList: ((state, action) => {
            console.log(action.payload);
            state.title = action.payload.title;
            state.content = action.payload.content;
        }),
    },
    extraReducers: {}
});

export const {imageUpload, postContentList} = addPostSlice.actions;
export default addPostSlice.reducer;
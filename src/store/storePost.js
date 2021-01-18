import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosPost } from '../axios/axiosPost';

const initialState = {
    loading: false,
    error: false,
    postUser: null,
    postImage: [],
    postTitle: null,
    postContent: null,
    postCreateDate: null,
    postReply: [
        {
            replyUser: null,
            replyContent: null,
            replyCreateDate: null,
        }
    ]
};

export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async () => {
        const payload = await axiosPost();
        return payload;
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPost.pending.type]: (state, action) => {
            console.log(`pending :: ${action}`);
            state.loading = true;
        },
        [fetchPost.fulfilled.type]: (state, action) => {
            console.log(`fulfilled :: ${action.payload}`);
            // state.postImage.push(action.payload.map(e => e.urls.full));
        },
        [fetchPost.rejected.type]: (state, action) => {
            console.log(`rejected :: ${action}`);
        }
    }
});

// export const { getPost } = postSlice.actions;
export default postSlice.reducer;
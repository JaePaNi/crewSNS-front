import { createSlice } from '@reduxjs/toolkit';
import { fetchCreatePost, fetchImages, fetchPost, fetchReply } from './thunk/thunkPost';
import axios from 'axios';

const initialState = {
    loading: false,
    error: false,
    createPost: false,
    callPost: false,
    Post: [],
    PostImages: [],
    PostReply: [],
    images: [],
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        removeImage: ((state, action) => {
            state.images = state.images.filter((i, v) => v !== action.payload);
        }),

        postStatus: ((state) => {
            state.images = [];
            state.createPost = false;
        }),
    },
    extraReducers: {
        // 이미지 업로드
        [fetchImages.pending]: (state, action) => {
        },
        [fetchImages.fulfilled]: (state, action) => {
            state.images = state.images.concat(action.payload.data);
        },
        [fetchImages.rejected]: (state, action) => {
        },

        // post생성하기
        [fetchCreatePost.pending]: (state, action) => {
            console.log('createPost pending');
        },
        [fetchCreatePost.fulfilled]: (state, action) => {
            console.log('createPost fulfilled');
            state.createPost = true;
        },
        [fetchCreatePost.rejected]: (state, action) => {
            console.log('createPost rejected');
        },

        // post불러오기
        [fetchPost.pending]: (state, action) => {
            state.loading = true;
            state.error = false;
            state.callPost = false;
        },
        [fetchPost.fulfilled]: (state, action) => {
            state.callPost = true;
            state.Post = [];
            state.PostImages = [];
            state.PostReply = [];

            state.Post.push(...action.payload.content);
            state.PostImages.push(...action.payload.image);
            state.PostReply.push(...action.payload.reply);
        },
        [fetchPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
            state.Post = [];
        },

        // 댓글 등록하기
        [fetchReply.pending]: (state, action) => {
        },
        [fetchReply.fulfilled]: (state, action) => {
            console.log('fetchReply fulfilled', action.payload);
            state.PostReply.push({
                ...state.PostReply,
                ...action.payload.data
            });
        },
        [fetchReply.rejected]: (state, action) => {
        }
    }
});

export const { registReply, removeImage, postStatus } = postSlice.actions;
export default postSlice.reducer;
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL;

// 포스트생성
export const fetchCreatePost = createAsyncThunk(
    'post/fetchCreatePost',
    async (formData) => {
        const payload = await axios.post('/post/postCreate', formData);
        return payload;
    }
);

// 이미지 우선 등록
export const fetchImages = createAsyncThunk(
    'post/fetchImages',
    async (formData) => {
        const payload = await axios.post('/post/postImages', formData);
        return payload;
    }
);

// 포스트 불러오기
export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async () => {
        const payload = await axios.get('/post/postCall').then(res => res.data);
        return payload;
    }
);

// 댓글 등록하기
export const fetchReply = createAsyncThunk(
    'post/fetchReply',
    async (data) => {
        const { index } = data;
        const payload = await axios.post(`/post/${index}/postReply`, data);
        return payload;
    }
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL;

// 포스트생성
export const fetchCreatePost = createAsyncThunk(
    'post/fetchCreatePost',
    async (formData) => {
        const payload = await axios.post('/post/postCreate', formData);
        console.log('thunkPost Create :: ', payload);
        return payload;
    }
);

// 이미지 우선 등록
export const fetchImages = createAsyncThunk(
    'post/fetchImages',
    async (formData) => {
        console.log(formData.keys.length);
        const payload = await axios.post('/post/postImages', formData);
        return payload;
    }
);
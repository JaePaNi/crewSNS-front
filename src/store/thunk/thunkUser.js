import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL;

// 회원가입
export const fetchRegist = createAsyncThunk(
    'user/fetchRegist',
    async (userInsertInfo) => {
        const payload = await axios.post('/user', userInsertInfo);
        return payload;
    }
);

// 로그인
export const fetchLogin = createAsyncThunk(
    'user/getchLogin',
    async (userInsertInfo) => {
        const payload = await axios.post('/user/login', userInsertInfo, {
            withCredentials: true,
        }); 
        return payload;
    }
);
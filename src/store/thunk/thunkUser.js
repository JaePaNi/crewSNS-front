import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_URL_AWS_EC2;

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
    'user/fetchLogin',
    async (userInsertInfo) => {
        const payload = await axios.post('/user/login', userInsertInfo, {
            withCredentials: true,
        });
        return payload;
    }
);

// 로그인 후 쿠키정보로 사용자 정보 가져오기
export const fetchLoadUser = createAsyncThunk(
    'user/fetchLoadUser',
    async () => {
        const payload = await axios.get('/user', {
            withCredentials: true,
        });
        return payload;
    }
);

// 로그아웃
export const fetchLogout = createAsyncThunk(
    'user/fetchLogout',
    async () => {
        const payload = await axios.post('/user/logout', {}, {
            withCredentials: true,
        });
        return payload;
    }
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

console.log(process.env.REACT_APP_URL);

// 로그인
export const fetchLogin = createAsyncThunk(
    'user/getchLogin',
    async (userInsertInfo) => {
        const payload = await axios.post(`${process.env.REACT_APP_URL}/user/login`, userInsertInfo);
        console.log('!!!!!', payload);
        return payload;
    }
);

// 회원가입
export const fetchRegist = createAsyncThunk(
    'user/fetchRegist',
    async (userInsertInfo) => {
        const payload = await axios.post(`${process.env.REACT_APP_URL}/user`, userInsertInfo);
        // console.log(payload.status);
        return payload;
    }
);
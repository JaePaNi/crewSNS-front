import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:5000';

// 로그인
export const fetchLogin = createAsyncThunk(
    'user/fetchPost',
    async (data) => {
        console.log(data);
        const payload = await axios({
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            url: url,
            data: {
                "id": data.id,
                "pw": data.pw
            }
        });
        console.log(`fetchLogin :: ${payload}`);
        return payload;
    }
);

// 회원가입
export const fetchRegist = createAsyncThunk(
    'user/fetchRegist',
    async (userInsertInfo) => {
        const payload = await axios({
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            url: `${url}/user`,
            data: {
                'id': userInsertInfo.id,
                'pw': userInsertInfo.pw
            }
        });
        return payload;
    }
);
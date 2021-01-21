import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLogin, fetchRegist } from './thunk/thunkUser';

const initialState = {
    loading: false,
    error: false,
    isLogin: false,
    userNickname: null,
    regist: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: ((state, action) => {
            const { id, pw } = action.payload;
            state.isLogin = true;
            state.userNickname = id;
        }),
        logout: ((state) => {
            state.isLogin = false;
            state.userNickname = null;
        })
    },
    extraReducers: {
        // 로그인
        [fetchLogin.pending]: (state, action) => {
            console.log('pending', action);
        },
        [fetchLogin.fulfilled]: (state, action) => {
            console.log('fulfilled', action);
        },
        [fetchLogin.rejected]: (state, action) => {
            console.log('rejected', action);
        },

        // 회원가입
        [fetchRegist.pending]: (state, action) => {
            console.log('pending', action);
        },
        [fetchRegist.fulfilled]: (state, action) => {
            console.log('fulfilled', action);
        },
        [fetchRegist.rejected]: (state, action) => {
            console.log('rejected', action);
        },
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
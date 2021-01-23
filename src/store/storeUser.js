import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin, fetchLogout, fetchLoadUser, fetchRegist } from './thunk/thunkUser';

const initialState = {
    loading: false,
    error: false,
    isLogin: false,
    userId: null,
    userNickname: null,
    regist: false, //회원가입 성공 여부
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //회원가입 성공 후 회원가입 regist값을 true에서 false로 변경해준다.
        registReset: state => {
            state.regist = false;
            state.loading = false;
        }
    },
    extraReducers: {
        // 회원가입 처리
        [fetchRegist.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [fetchRegist.fulfilled]: (state) => {
            state.regist = true;
        },
        [fetchRegist.rejected]: (state) => {
            state.loading = false;
            state.error = true;
        },

        // 로그인 처리
        [fetchLogin.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.isLogin = true;
            state.userId = action.payload.data.user_id;
            state.userNickname = action.payload.data.user_nickname;
        },
        [fetchLogin.rejected]: (state) => {
            state.loading = false;
            state.error = true;
        },

        // 로그인 후 쿠키로 사용자 정보 받아오기
        [fetchLoadUser.pending]: (state) => {
            state.loading = true;
        },
        [fetchLoadUser.fulfilled]: (state, action) => {
            state.isLogin = true;
            state.userId = action.payload.data.user_id;
            state.userNickname = action.payload.data.user_nickname;
        },
        [fetchLoadUser.rejected]: (state) => {
            state.loading = false;
        },

        // 로그아웃 처리
        [fetchLogout.pending]: (state) => {
            state.loading = true;
        },
        [fetchLogout.fulfilled]: (state) => {
            state.isLogin = false;
            state.userId = null;
            state.userNickname = null;
            state.loading = false;
            state.error = false;
            state.regist = false;
        },
        [fetchLogout.rejected]: (state) => {
            state.loading = false;
        },
    }
});

export const { registReset } = userSlice.actions;
export default userSlice.reducer;
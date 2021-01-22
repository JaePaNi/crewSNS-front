import { createSlice } from '@reduxjs/toolkit';
import { fetchLogin, fetchRegist } from './thunk/thunkUser';

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
    }
});

export const { registReset } = userSlice.actions;
export default userSlice.reducer;
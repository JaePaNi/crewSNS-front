import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchLogin, fetchRegist} from './thunk/thunkUser';

const initialState = {
    loading: false,
    error: false,
    isLogin: false,
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
        // 로그인 처리
        [fetchLogin.pending]: (state, action) => {
            console.log('pending', action);
        },
        [fetchLogin.fulfilled]: (state, action) => {
            console.log('fulfilled', action);
        },
        [fetchLogin.rejected]: (state, action) => {
            console.log('rejected', action);
        },

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
    }
});

export const {login, logout, registReset} = userSlice.actions;
export default userSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
    userNickname: null,
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
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
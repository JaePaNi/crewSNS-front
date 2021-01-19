import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {axiosPost} from '../axios/axiosPost';

const initialState = {
    loading: false,
    error: false,
    Post: [{
        postUser: null,
        postImage: [],
        postTitle: null,
        postContent: null,
        postCreateDate: null,
        postReply: [
            {
                replyUser: null,
                replyContent: null,
                replyCreateDate: null,
            }
        ]
    }]
};

export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async () => {
        const payload = await axiosPost();
        return payload;
    }
)

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        registReply: ((state, action) => {
            const {inputReply, userNickname, time} = action.payload;
            console.log(inputReply, userNickname, time);
            console.log(state.Post.length);
            state.Post.push(...state.Post.map(
                e => e,
                e.postReply.push({
                    replyUser: userNickname,
                    replyContent: inputReply,
                    replyCreateDate: time,
                })));
        });
    },
    extraReducers: {
        [fetchPost.pending]: (state, action) => {
            console.log(`pending :: ${action}`);
            state.loading = true;
        },
        [fetchPost.fulfilled]: (state, action) => {
            for (const key in action.payload) {
                state.Post.push({
                    postUser: action.payload[key].user.instagram_username,
                    postImage: [action.payload[key].urls.regular],
                    postTitle: action.payload[key].user.name,
                    postContent: action.payload[key].user.bio,
                    postCreateDate: action.payload[key].user.updated_at,
                    postReply: [{
                        replyUser: 'jaepani',
                        replyContent: 'hi my name is jaepani',
                        replyCreateDate: action.payload[key].user.updated_at,
                    }]
                });
            }
        },
        [fetchPost.rejected]: (state, action) => {
            state.loading = false;
            state.error = true;
            state.Post = [{
                postUser: null,
                postImage: [],
                postTitle: null,
                postContent: null,
                postCreateDate: null,
                postReply: [
                    {
                        replyUser: null,
                        replyContent: null,
                        replyCreateDate: null,
                    }
                ]
            }]
            console.log(`rejected :: ${action.error.message()}`);
        }
    }
});

export const {registReply} = postSlice.actions;
export default postSlice.reducer;
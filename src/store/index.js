import { combineReducers } from 'redux';
import storeUser from './storeUser';
import storeGetPost from "./storeGetPost";
import storeAddPost from "./storeAddPost";

export const rootReducer = combineReducers({
    storeUser: storeUser,
    storeGetPost: storeGetPost,
    storeAddPost: storeAddPost,
});
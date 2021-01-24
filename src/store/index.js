import { combineReducers } from 'redux';
import storeUser from './storeUser';
import storePost from './storePost';

export const rootReducer = combineReducers({
    storeUser: storeUser,
    storePost: storePost,
});
import React, { Suspense, useEffect } from 'react';

import { Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPost } from '../store/thunk/thunkPost';

import Login from './login';
import NotLogin from './notLogin';
const PostList = React.lazy(() => import('./postList'));

const Main = () => {

    // 로그인 여부를 확인한다. true or false
    const { isLogin } = useSelector(state => state.storeUser);
    return (
        <Row justify='center'>
            <Col md={2} />
            <Col md={22} xs={22}>
                <Row justify='space-around'>
                    {/* isLogin이 true, false에 따라서 로그인 창 or 유저창이 보여진다. */}
                    <Col md={6} xs={24}>{isLogin === true ? <Login /> : <NotLogin />}</Col>
                    <Col md={1} />
                    <Col md={17} xs={24}>
                        <Suspense fallback={<div>loading...</div>}>
                            <PostList />
                        </Suspense>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Main;
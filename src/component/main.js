import React, { Suspense } from 'react';

import { Row, Col } from 'antd';
import Login from './login';
import { useSelector } from 'react-redux';

import NotLogin from './notLogin';
const Post = React.lazy(() => import('./post'));

const Main = () => {
    const isLogin = useSelector(state => state.storeUser.isLogin);
    return (
        <Row justify='center'>
            <Col md={2} />
            <Col md={22} xs={22}>
                <Row justify='space-around'>
                    <Col md={6} xs={24}>{isLogin === true ? <Login /> : <NotLogin />}
                    </Col>
                    <Col md={1} />
                    <Col md={17} xs={24}>
                        <Suspense fallback={<div>loading...</div>}>
                            <Post />
                        </Suspense>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Main;
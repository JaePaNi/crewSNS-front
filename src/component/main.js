import React, {Suspense} from 'react';

import {Row, Col, Typography} from 'antd';
import styled from 'styled-components';
import Login from './login';

import NotLogin from './notLogin';
const Post = React.lazy(() => import('./post'));


const bool = false;

const Main = () => {
    return (
        <Row justify='center'>
            <ColHeader span={24}>
                <Typography.Title level={3}>CREW STAGRAM</Typography.Title>
            </ColHeader>
            <Col md={2}/>
            <Col md={22} xs={22}>
                <Row justify='space-around'>
                    <Col md={6} xs={24}>
                        {bool === true ? <Login/> : <NotLogin/>}
                    </Col>
                    <Col md={1}/>
                    <Col md={17} xs={24}>
                        <Suspense fallback={<div>loading...</div>}>
                            <Post/>
                        </Suspense>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Main;

const ColHeader = styled(Col)`
  padding: 15px 0;
  margin-bottom: 20px;
  text-align: center;
  color: black;
`;
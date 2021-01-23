import React, { useEffect } from 'react';
import { Row, Col, Typography } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoadUser } from './store/thunk/thunkUser';
import styled from 'styled-components';

import Main from './component/main';
import SignUp from './component/signUp';
import AddPost from './component/postAdd';

function App() {
    const { isLogin } = useSelector(state => state.storeUser);
    const dispatch = useDispatch();

    useEffect(() => {
        !isLogin && dispatch(fetchLoadUser());
    }, []);
    return (
        <Row>
            <ColHeader span={24}>
                <Typography.Title level={3}>CREW STAGRAM</Typography.Title>
            </ColHeader>
            <Col span={24}>
                <BrowserRouter>
                    <Route exact path='/'><Main /></Route>
                    <Route exact path='/signup'><SignUp /></Route>
                    <Route exact path='/addpost'><AddPost /></Route>
                </BrowserRouter>
            </Col>
        </Row>
    );
}

export default App;

const ColHeader = styled(Col)`
  padding: 15px 0;
  margin-bottom: 20px;
  text-align: center;
  color: black;
`;
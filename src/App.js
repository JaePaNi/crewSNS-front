import { Row, Col, Typography } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';

import styled from 'styled-components';

import Main from './component/main';
import SignUp from './component/signUp';
import AddPost from './component/postAdd';

function App() {
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
import {Row, Col, Layout} from 'antd';
import styled from 'styled-components';

import LoginForm from './loginForm';
import Post from './post'

const Main = () => {
    return (
        <Row justify='center'>
            <Col span={24}><MainHeader>CREW STAGRAM</MainHeader></Col>
            <Col span={20}>
                <Row justify='space-around'>
                    <Col md={8} xs={24}><LoginForm/></Col>
                    <Col md={16} xs={24}><Post/></Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Main;
const MainHeader = styled(Layout.Header)`
  background-color: transparent;
  text-align: center;
  color: black;
`;
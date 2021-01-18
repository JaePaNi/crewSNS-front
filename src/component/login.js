import { useCallback } from 'react';
import { Card, Typography, Row, Col, Button } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/storeUser';

const { Title } = Typography;

const Login = () => {
    const dispatch = useDispatch();
    const userNickname = useSelector(state => state.storeUser.userNickname);
    const onClickLogout = useCallback(() => {
        dispatch(logout());
    }, []);

    return (
        <Card size="small" hoverable>
            <Row>
                <Col span={24} style={{ textAlign: 'center' }}><Title level={4}>{userNickname}님</Title></Col>
                <Col span={24}><Button block onClick={onClickLogout}>로그아웃</Button></Col>
            </Row>
        </Card>
    );
}

export default Login;
import { memo, useState, useEffect, useCallback } from 'react';
import { Card, Typography, Row, Col, Button } from 'antd';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/storeUser';

import PostAdd from './postAdd';

const { Title } = Typography;

const Login = () => {
    const dispatch = useDispatch();
    const userNickname = useSelector(state => state.storeUser.userNickname);
    const onClickLogout = useCallback(() => {
        dispatch(logout());
    }, []);

    const [state, setState] = useState({ visible: false });
    const onClickAddPost = useCallback(() => {
        state.visible ? setState({visible : false}) : setState({visible : true});        
    }, [state]);

    return (
        <Card size="small" hoverable>
            <Row>
                <Col span={24} style={{ textAlign: 'center' }}><Title level={4}>{userNickname}님</Title></Col>
                <ColButton span={24}><Button type='ghost' block onClick={onClickAddPost}>포스트 작성</Button></ColButton>
                <ColButton span={24}><Button danger block onClick={onClickLogout}>로그아웃</Button></ColButton>
                <PostAdd state={state} />
            </Row>
        </Card>
    );
}

export default memo(Login);

const ColButton = styled(Col)`
    margin: 5px 0;
`;
import { memo, useCallback } from 'react';
import { Card, Typography, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../store/thunk/thunkUser';
import styled from 'styled-components';

const { Title } = Typography;

const Login = () => {
    const dispatch = useDispatch();
    const { userNickname, userId } = useSelector(state => state.storeUser);
    const onClickLogout = useCallback(() => {
        dispatch(fetchLogout());
    }, []);

    return (
        <Wrap>
            <Card size="small" hoverable>
                <Row>
                    <Col span={24} style={{ textAlign: 'center' }}>
                        <Title level={4}>{userNickname === '#' ? userId : userNickname}님</Title></Col>
                    <ColButton span={24}>
                        <Link to='/addpost'>
                            <Button type='ghost' block>포스트 작성</Button>
                        </Link>
                    </ColButton>
                    <ColButton span={24}><Button danger block onClick={onClickLogout}>로그아웃</Button></ColButton>
                </Row>
            </Card>
        </Wrap>
    );
}

export default memo(Login);

const Wrap = styled.div`
  position: sticky;
  top: 15px;
`;

const ColButton = styled(Col)`
    margin: 5px 0;
`;
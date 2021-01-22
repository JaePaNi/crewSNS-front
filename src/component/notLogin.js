import React, { useEffect, useCallback, useRef, memo } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../store/thunk/thunkUser';

const LoginForm = () => {
    const onloadFocus = useRef();

    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.storeUser);

    // 사용자가 로그인을 위한 id, pw를 입력 후 로그인 버튼을 누르면 fetchLogin을 dispatch하여 백엔드로 로그인을 위한 데이터를 보낸다.
    const onInputSuccess = useCallback(e => {
        dispatch(fetchLogin({ ...e }));
    }, []);

    // 입력한 id, pw로 로그인에 성공하지 못했으면 id, pw중 한가지가 오류가 난 것이므로 error가 true가 된다. 그러면 alert이벤트를 발생시킨다.
    useEffect(() => {
        error && alert('아이디 또는 비밀번호가 틀렸습니다.');
    }, [error]);

    //화면이 로딩되면 로그인 아이디에 자동 포커싱
    useEffect(() => {
        onloadFocus.current.focus();
    }, []);

    return (
        <Wrap>
            <Form size='middle' onFinish={onInputSuccess} wrapperCol={{ md: 18, xs: 12 }}>
                <Form.Item name="id" rules={[
                    {
                        required: true,
                        message: '계정 입력'
                    }
                ]}>
                    <Input placeholder="아이디" ref={onloadFocus} />
                </Form.Item>
                <Form.Item name="pw" rules={[
                    {
                        required: true,
                        message: '비밀번호 입력'
                    }
                ]}>
                    <Input type="password" placeholder="비밀번호" />
                </Form.Item>
                <Form.Item>
                    {/* loading이 true이면 loading 애니메이션이 동작한다. */}
                    <LoginButton type="primary" htmlType="submit" loading={loading && true}>로그인</LoginButton>
                    <Button type="ghost"><Link to='/signup'>회원가입</Link></Button>
                </Form.Item>
            </Form>
        </Wrap>
    );
}

export default memo(LoginForm);


const LoginButton = styled(Button)`
  margin-right: 10px;
`;

const Wrap = styled.div`
  position: sticky;
  top: 15px;
`;
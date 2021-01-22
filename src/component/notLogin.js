import React, { useEffect, useCallback, useRef, memo } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../store/thunk/thunkUser';

const LoginForm = () => {
    const onloadFocus = useRef();

    const dispatch = useDispatch();

    const onInputSuccess = useCallback(e => {
        dispatch(fetchLogin({ ...e }));
    }, []);

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
                    <LoginButton type="primary" htmlType="submit">로그인</LoginButton>
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
import React, {useState, useEffect, useCallback, useRef} from 'react';

import {Form, Input, Button} from 'antd';

import styled from 'styled-components';

const LoginForm = () => {
    const [userInput, setUserInput] = useState({id: null, pw: null});
    const onloadFocus = useRef(null);

    //로그인 아닌 경우 아이디 입력 창에 자동 포커싱
    useEffect(() => {
        onloadFocus.current.focus();
    }, []);

    const onInputSuccess = useCallback(e => {
        setUserInput({id: e.id, pw: e.pw});
    }, []);

    const onInputError = useCallback(e => {

    });

    return (
        <Wrap>
            <Form size='middle' onFinish={onInputSuccess} onFinishFailed={onInputError}
                  wrapperCol={{md: 18, xs: 12}}>
                <Form.Item name="id" rules={[
                    {
                        required: true,
                        message: '계정 입력'
                    }
                ]}>
                    <Input placeholder="아이디" ref={onloadFocus}/>
                </Form.Item>
                <Form.Item name="pw" rules={[
                    {
                        required: true,
                        message: '비밀번호 입력'
                    }
                ]}>
                    <Input type="password" placeholder="비밀번호"/>
                </Form.Item>
                <Form.Item>
                    <LoginButton type="primary" htmlType="submit">로그인</LoginButton>
                    <Button type="ghost">회원가입</Button>
                </Form.Item>
            </Form>
        </Wrap>
    );
}

export default LoginForm;


const LoginButton = styled(Button)`
  margin-right: 10px;
`;

const Wrap = styled.div`
    position: sticky;
    top: 15px;
    `;
import React, {useState, useEffect, useCallback, useRef} from 'react';

import {Form, Input, Button, Row, Col} from 'antd';
import styled from 'styled-components';

const SignUp = () => {
    const [inputData, setInputData] = useState({id: null, pw: null, pwCheck: true});
    const onloadFocus = useRef();
    const onInputSuccess = useCallback(e => {
        /*inputData pwCheck가 true이면 넘어 온 값 inputData useState에 저장*/
        inputData.pwCheck &&
        setInputData({...e, pwCheck: true});
    }, []);

    const onInputError = useCallback(e => {

    });

    useEffect(() => {
        onloadFocus.current.focus();
    }, []);

    return (
        <Row justify='center'>
            <Col md={6} xs={22}>
                <Form size='middle' onFinish={onInputSuccess} onFinishFailed={onInputError}
                      wrapperCol={{md: 24, xs: 12}}>

                    <Form.Item name="id" rules={[
                        {
                            required: true,
                            message: '사용할 계정 입력해주세요'
                        }
                    ]}>
                        <Input placeholder="사용할 아이디" ref={onloadFocus}/>
                    </Form.Item>
                    <Form.Item name="pw" rules={[
                        {
                            required: true,
                            message: '사용할 비밀번호 입력해주세요'
                        }
                    ]}>
                        <Input.Password placeholder="사용할 비밀번호"
                            /*pw 확인을 하기 위해서 inputData useState에 저장*/
                                        onChange={e => setInputData({...inputData, pw: e.target.value})}/>
                    </Form.Item>

                    <Form.Item name="pwCheck">
                        <Input.Password placeholder="비밀번호 확인"
                                        onChange={e => inputData.pw === e.target.value
                                            ? setInputData({...inputData, pwCheck: true})
                                            : setInputData({...inputData, pwCheck: false})}/>
                        {inputData.pwCheck === false ? <PwCheck>비밀번호가 다릅니다.</PwCheck> : undefined}
                    </Form.Item>
                    <Form.Item>
                        <LoginButton type="primary" htmlType="submit" block>회원가입</LoginButton>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default SignUp;


const LoginButton = styled(Button)`
  margin-right: 10px;
`;

const PwCheck = styled.div`
  font-weight: bold;
  color: red;
`;
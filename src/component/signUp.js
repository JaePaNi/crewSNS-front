import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Form, Input, Button, Row, Col} from 'antd';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {registReset} from '../store/storeUser';
import {fetchRegist} from '../store/thunk/thunkUser';

const SignUp = () => {
    const [inputData, setInputData] = useState({pw: null, pwCheck: false});
    const onloadFocus = useRef();
    const dispatch = useDispatch();
    const {loading, regist, error} = useSelector(state => state.storeUser);
    const history = useHistory();

    //사용할 아이디 비밀번호 전부 입력 후 회원가입 버튼 누르면 createAsyncThunk를 통해 백엔드에 회원가입 요청을 보낸다.
    //inputData.pwCheck :: 사용자가 입력한 두개의 비밀번호가 일치한지 확인한다.
    const onInputSuccess = useCallback(e => {
        if (inputData.pwCheck) dispatch(fetchRegist(e));
    }, [inputData]);

    //비밀번호를 서로 비교사기 위해서 useState inputData에 저장한다.
    const insertPassword = useCallback(e => {
        setInputData({...inputData, pw: e.target.value})
    }, [inputData]);

    //사용자가 입력한 비밀번호와 비밀번호 확인이 서로 같은지 확인한다.
    const passwordCheck = useCallback(e => {
        inputData.pw === e.target.value
            ? setInputData({...inputData, pwCheck: true})
            : setInputData({...inputData, pwCheck: false})
    }, [inputData]);

    //회원가입 버튼을 누르고 백엔드에서 응답이 오면 성공/실패 여부를 판단한다.
    //useSelect로 regist, loading, error를 가지고 판단한다.
    //loading과 regist모두 true이면 회원가입 성공, loading이 false이고 error가 true이면 회원가입 실패이다.
    //회원가입은 아이디로만 중복확인한다.
    useEffect(() => {
        if (loading) {
            if (regist) {
                alert('회원가입 성공');
                dispatch(registReset()); //회원가입 성공 후 storeUser의 regist값을 true에서 false로 변경해준다.
                history.push('/');
            }
        }
        if (loading === false && error) alert('중복되는 아이디 입니다.');
    }, [regist, loading, error]);

    //화면이 로딩되면 사용할 아이디 부분에 focus효과
    useEffect(() => onloadFocus.current.focus(), []);

    return (
        <Row justify='center'>
            <Col md={6} xs={22}>
                <Form size='middle' onFinish={onInputSuccess} wrapperCol={{md: 24, xs: 12}}>
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
                        <Input.Password placeholder="사용할 비밀번호" onChange={insertPassword}/>
                    </Form.Item>

                    <Form.Item name="pwCheck">
                        <Input.Password placeholder="비밀번호 확인" onChange={passwordCheck}/>
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
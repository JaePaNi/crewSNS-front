import React, {useCallback, useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import {Row, Col, Form, Input, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {useDispatch, useSelector} from 'react-redux';
import {imageUpload, postContentList} from '../store/storeAddPost';

const PostAdd = () => {
    const clickImage = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const {isLogin} = useSelector(state => state.storeUser);
    const formData = new FormData();

    const onChangeImage = useCallback(e => {
        formData.append('image', e.target.files);
    }, []);

    const onClickImageUpload = useCallback(() => {
        clickImage.current.click();
    }, [clickImage.current]);

    const onFinish = useCallback(e => {
        dispatch(postContentList(formData));
    }, []);

    useEffect(() => {
        !isLogin && alert('로그인을 해야합니다.');
        !isLogin && history.push('/');
    }, []);

    return (
        <Row justify='center'>
            <Col md={22} xs={22} style={{textAlign: 'center', margin: '50px 0', fontSize: 20}}>오늘은 어떤 포스트를 작성할건가요?</Col>
            <Col md={10} xs={22}>
                <Form onFinish={onFinish} encType='multipart/form-data'>
                    <Form.Item name='title'>
                        <Input placeholder="포스트의 제목은 무엇인가요?"/>
                    </Form.Item>

                    <Form.Item name='content'>
                        <Input.TextArea placeholder="어떤 내용을 작성하시겠어요?" autoSize={{minRows: 7}}/>
                    </Form.Item>

                    <Form.Item>
                        <input ref={clickImage} type='file' multiple hidden onChange={onChangeImage}/>
                        <Button block onClick={onClickImageUpload} icon={<UploadOutlined/>}>이미지를 업로드 하시겠어요?</Button>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit">포스트 업로드</Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}

export default PostAdd;
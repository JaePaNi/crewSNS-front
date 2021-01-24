import React, { useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, fetchCreatePost } from '../store/thunk/thunkPost';
import { removeImage, postStatus } from '../store/storePost';

const PostAdd = () => {
    const clickImage = useRef();
    const history = useHistory();
    const dispatch = useDispatch();
    const { isLogin, userId } = useSelector(state => state.storeUser);
    const { images, createPost } = useSelector(state => state.storePost);

    const onChangeImage = useCallback(e => {
        const formData = new FormData();
        for (let i = 0; i < e.target.files.length; i++) {
            console.log(e.target.files[i]);
            formData.append('image', e.target.files[i], e.target.files[i].name);
        }
        dispatch(fetchImages(formData));
    }, []);

    const onClickImageUpload = useCallback(() => {
        clickImage.current.click();
    }, [clickImage.current]);

    const onFinish = useCallback(e => {
        const formData = new FormData();
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i]);
        }
        formData.append('title', e.title);
        formData.append('content', e.content);
        formData.append('user', userId);
        dispatch(fetchCreatePost(formData));
    }, [images]);

    const onClickRemoveImage = useCallback(index => () => {
        dispatch(removeImage(index));
    }, []);

    useEffect(() => {
        createPost && alert('포스트가 등록되었습니다.');
        createPost && history.push('/');
        dispatch(postStatus());
    }, [createPost]);

    useEffect(() => {
        !isLogin && history.push('/');
    }, []);

    return (
        <Row justify='center'>
            <Col md={22} xs={22} style={{ textAlign: 'center', margin: '50px 0', fontSize: 20 }}>
                <Typography.Title level={3}>포스트 작성</Typography.Title>
            </Col>
            <Col md={10} xs={22}>
                <Form onFinish={onFinish} encType='multipart/form-data'>
                    <Form.Item name='title'>
                        <Input placeholder="포스트의 제목은 무엇인가요?" />
                    </Form.Item>

                    <Form.Item name='content'>
                        <Input.TextArea placeholder="어떤 내용을 작성하시겠어요?" autoSize={{ minRows: 7 }} />
                    </Form.Item>

                    <input ref={clickImage} type='file' multiple hidden onChange={onChangeImage} encType='multipart/form-data' />
                    <Button block onClick={onClickImageUpload} icon={<UploadOutlined />}>이미지를 업로드 하시겠어요?</Button>

                    <Form.Item>
                        <div style={{ display: 'flex' }}>
                            {images.length !== 0 && images.map((e, index) => (
                                <div>
                                    <img src={`${process.env.REACT_APP_URL}/${e}`} width='100px' height='auto' />
                                    <div>
                                        <Button onClick={onClickRemoveImage(index)}>지우기</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
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
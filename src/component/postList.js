import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Row, Col, Card, Image, Typography, Input, Button, Comment, Tooltip, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost, registReply } from '../store/storePost';

const { Meta } = Card;
const { Title } = Typography;
const { Paragraph } = Typography;

const paragraphData = { rows: 3, expandable: true, symbol: <span>more</span> }

const Post = () => {
    const dispatch = useDispatch();
    const { Post, loading } = useSelector(state => state.storePost);
    const { isLogin, userNickname } = useSelector(state => state.storeUser);

    const [inputReply, setInputReply] = useState('');

    useEffect(() => {
        dispatch(fetchPost());
    }, []);

    const onChangeReply = useCallback(e => {
        setInputReply(e.target.value);
    }, []);

    const onClickReply = useCallback(index => {
        const time = new Date().getDate();
        if (isLogin) {
            inputReply !== '' && dispatch(registReply({ inputReply, userNickname, time, index }));
            setInputReply('');
        } else alert('로그인이 필요합니다.');
    }, [inputReply, isLogin]);

    return (
        loading &&
        <Row>
            <Col md={10} xs={24}>
                {
                    Post.map((e, index) => (
                        index !== 0 &&
                        <Cards
                            hoverable
                            style={{ maxWidth: '100%' }}
                            title={
                                <Row align="center">
                                    <Col md={3} xs={4}><Avatar icon={<UserOutlined />} /></Col>
                                    <Col md={21} xs={20}>{e.postUser}</Col>
                                </Row>
                            }
                            cover={
                                <LazyLoad offset={100} scroll="true" placeholder={<div>loading...</div>} height="300px"
                                    throttle={100}>
                                    <Image.PreviewGroup>
                                        <Image
                                            width="100%"
                                            height="300px"
                                            src={e.postImage[0]}
                                        />
                                    </Image.PreviewGroup>
                                </LazyLoad>
                            }
                        >
                            <Meta
                                title={<Title level={4}>{e.postTitle}</Title>}
                                description={
                                    <Row>
                                        <Col span={24}>
                                            <Paragraph
                                                ellipsis={paragraphData}>
                                                {e.postContent}
                                            </Paragraph>
                                        </Col>
                                        {/*댓글*/}
                                        {
                                            e.postReply.map(reply => (
                                                <Col span={24}>
                                                    <Comment
                                                        author={<span>{reply.replyUser}</span>}
                                                        content={<p>{reply.replyContent}</p>}
                                                        datetime={
                                                            <Tooltip title={reply.replyCreateDate}>
                                                                <span>{reply.replyCreateDate}</span>
                                                            </Tooltip>
                                                        }
                                                    />
                                                </Col>
                                            ))
                                        }
                                        {/*댓글입력칸*/}
                                        <Col md={20} xs={18}>
                                            <Input onChange={onChangeReply} value={inputReply} placeholder="댓글" bordered={false} onPressEnter={() => onClickReply(index)} /></Col>
                                        {/* 댓글등록버튼 */}
                                        <Col md={4} xs={6}><Button onClick={() => onClickReply(index)} type="text">게시</Button></Col>
                                    </Row>
                                } />
                        </Cards>
                    ))}
            </Col>
        </Row>
    );
}

export default Post;

const Cards = styled(Card)`
  margin: 30px 0;
`;
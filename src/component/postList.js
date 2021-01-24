import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Row, Col, Card, Image, Typography, Input, Button, Comment, Tooltip, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { useDispatch, useSelector } from 'react-redux';
// import { registReply } from '../store/storePost';
import { fetchPost, fetchReply } from '../store/thunk/thunkPost';

const { Meta } = Card;
const { Title } = Typography;
const { Paragraph } = Typography;

const paragraphData = { rows: 3, expandable: true, symbol: <span>more</span> }

const Post = () => {
    const dispatch = useDispatch();
    const { Post, loading, PostImages, PostReply } = useSelector(state => state.storePost);
    const { isLogin, userNickname, userId } = useSelector(state => state.storeUser);

    const [replyContent, setReplyContent] = useState('');

    useEffect(() => {
        dispatch(fetchPost());
    }, []);

    const onChangeReply = useCallback(e => {
        setReplyContent(e.target.value);
    }, []);

    const onClickReply = useCallback(index => () => {
        // const time = new Date().getDate()
        console.log('&&&&&&&&&', index);
        if (isLogin) {
            replyContent !== '' && dispatch(fetchReply({ replyContent, userId, index }));
            setReplyContent('');
        } else alert('로그인이 필요합니다.');
    }, [replyContent, isLogin]);

    return (
        loading &&
        <Row>
            <Col md={10} xs={24}>
                {
                    Post.map((e, index) => (
                        <Cards
                            hoverable
                            style={{ maxWidth: '100%' }}
                            title={
                                <Row align="center">
                                    {/* <Col md={3} xs={4}><Avatar icon={<UserOutlined />} /></Col> */}
                                    <Col md={21} xs={20}>{e.post_author}</Col>
                                </Row>
                            }
                            이미지 부분
                            cover={
                                <LazyLoad offset={100} scroll="true" placeholder={<div>loading...</div>} height="300px"
                                    throttle={100}>
                                    {PostImages.map(img => (
                                        <Image.PreviewGroup>
                                            <Image
                                                height="400px"
                                                src={e.post_id === img.image_author && img.image_link}
                                            />
                                        </Image.PreviewGroup>
                                    ))}
                                </LazyLoad>
                            }
                        >
                            <Meta
                                title={<Title level={4}>{e.post_title}</Title>}
                                description={
                                    <Row>
                                        <Col span={24}>
                                            <Paragraph
                                                ellipsis={paragraphData}>
                                                {e.post_content}
                                            </Paragraph>
                                        </Col>
                                        {/*댓글*/}
                                        {
                                            PostReply.map(reply => (
                                                reply.reply_post_author === e.post_id &&
                                                <Col span={24}>
                                                    <Comment
                                                        author={<span>{reply.reply_user_author}</span>}
                                                        content={<p>{reply.reply_content}</p>}
                                                        datetime={
                                                            <Tooltip title={reply.reply_createdate}>
                                                                <span>{reply.reply_createdate}</span>
                                                            </Tooltip>
                                                        }
                                                    />
                                                </Col>
                                            ))
                                        }
                                        {/*댓글입력칸*/}
                                        <Col md={20} xs={18}>
                                            <Input onChange={onChangeReply} value={replyContent} placeholder="댓글..." bordered={false} onPressEnter={onClickReply(index)} />
                                        </Col>
                                        {/* 댓글등록버튼 */}
                                        <Col md={4} xs={6}><Button onClick={onClickReply(e.post_id)} type="text">게시</Button></Col>
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
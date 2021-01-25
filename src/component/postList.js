import React, { useEffect } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../store/thunk/thunkPost';

import CoverImage from './coverImage'
import Desc from './desc';

const { Meta } = Card;
const { Title } = Typography;

const Post = () => {
    const dispatch = useDispatch();
    const { Post, callPost } = useSelector(state => state.storePost);

    useEffect(() => {
        dispatch(fetchPost());
    }, []);

    return (
        callPost &&
        <Row>
            <Col md={10} xs={24}>
                {
                    Post.map((e, index) => (
                        <Cards
                            key={index}
                            hoverable
                            style={{ maxWidth: '100%' }}
                            title={
                                <Row align="center">
                                    {/* <Col md={3} xs={4}><Avatar icon={<UserOutlined />} /></Col> */}
                                    <Col md={21} xs={20}>{e.post_author}</Col>
                                </Row>
                            }
                            cover={<CoverImage post={e} />}
                        >
                            <Meta
                                title={<Title level={4}>{e.post_title}</Title>}
                                description={<Desc post={e} />}
                            />
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
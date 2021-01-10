import React, {useState, useEffect, useCallback, useRef} from 'react';
import {Row, Col, Card, Image, Typography, Input, Button, Comment, Tooltip, Avatar} from 'antd';

import {UserOutlined} from '@ant-design/icons';

import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import axios from 'axios';


const {Meta} = Card;
const {Title} = Typography;
const {Paragraph} = Typography;

const url = 'https://api.unsplash.com/photos/?client_id=gG8KyJv0AZDILSshYX698vmYIr7BRoY8YhAp4204who';

const Post = () => {
    // 이미지 api
    const [img, setImg] = useState([]);
    const getImage = () => {
        axios.get(url)
            .then(res => {
                setImg(res.data);
            });
    };
    useEffect(() => {
        getImage();
    }, []);

    return (
        img.length !== 0 &&
        <Row>
            <Col md={10} xs={24}>
                {
                    img.map((e) => (
                        <Cards
                            hoverable
                            style={{maxWidth: '100%'}}
                            title={
                                <Row align="center">
                                    <Col md={3} xs={4}><Avatar icon={<UserOutlined/>}/></Col>
                                    <Col md={21} xs={20}>JaePaNi</Col>
                                </Row>
                            }
                            cover={
                                <LazyLoad offset={100} scroll="true" placeholder={<div>loading...</div>} height="300px"
                                          throttle={100}>
                                    <Image.PreviewGroup>
                                        <Image
                                            width="100%"
                                            height="300px"
                                            src={e.urls.full}
                                        />
                                    </Image.PreviewGroup>
                                </LazyLoad>
                            }
                        >
                            <Meta
                                title={<Title level={4}>IU 사진모음</Title>}
                                description={
                                    <Row>
                                        <Col span={24}>
                                            <Paragraph
                                                ellipsis={{rows: 3, expandable: true, symbol: <span>more</span>}}>
                                                We supply a series of design principles, practical patterns and high
                                                quality
                                                design
                                                resources (Sketch and Axure), to help people create their product
                                                prototypes
                                                beautifully
                                                and efficiently.We supply a series of design principles, practical
                                                patterns and high
                                                quality
                                                design
                                                resources (Sketch and Axure), to help people create their product
                                                prototypes
                                                beautifully
                                                and efficiently.We supply a series of design principles, practical
                                                patterns and high
                                                quality
                                                design
                                                resources (Sketch and Axure), to help people create their product
                                                prototypes
                                                beautifully
                                                and efficiently.
                                            </Paragraph>
                                        </Col>
                                        {/*댓글*/}
                                        <Col span={24}>
                                            <Comment
                                                author={<span>Han Solo</span>}
                                                avatar={
                                                    <Avatar
                                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                        alt="Han Solo"
                                                    />
                                                }
                                                content={
                                                    <p>
                                                        We supply a series of design principles, practical patterns and
                                                        high
                                                        quality
                                                        design
                                                        resources (Sketch and Axure), to help people create their
                                                        product
                                                        prototypes
                                                        beautifully
                                                        and efficiently.
                                                    </p>
                                                }
                                                datetime={
                                                    <Tooltip title={Date.now()}>
                                                        <span>{Date.now()}</span>
                                                    </Tooltip>
                                                }
                                            />
                                        </Col>
                                        <Col span={24}>
                                            <Comment
                                                author={<a>Han Solo</a>}
                                                avatar={
                                                    <Avatar
                                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                        alt="Han Solo"
                                                    />
                                                }
                                                content={
                                                    <p>
                                                        We supply a series of design principles, practical patterns and
                                                        high
                                                        quality
                                                        design
                                                        resources (Sketch and Axure), to help people create their
                                                        product
                                                        prototypes
                                                        beautifully
                                                        and efficiently.
                                                    </p>
                                                }
                                                datetime={
                                                    <Tooltip title={Date.now()}>
                                                        <span>{Date.now()}</span>
                                                    </Tooltip>
                                                }
                                            />
                                        </Col>

                                        {/*댓글입력칸*/}
                                        <Col md={20} xs={18}><Input placeholder="댓글" bordered={false}/></Col>
                                        {/*댓글등록버튼*/}
                                        <Col md={4} xs={6}><Button type="text">게시</Button></Col>
                                    </Row>
                                }/>
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
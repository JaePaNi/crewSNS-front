import React, {useCallback, useRef} from 'react';
import {Row, Col, Card, Image} from 'antd';
import styled from 'styled-components';

const {Meta} = Card;

const Post = () => {
    return (
        <Row>
            <Col md={10} xs={24}>
                <Cards
                    hoverable
                    style={{maxWidth: '100%'}}
                    title={<p>이곳에 일자와 장소 넣기</p>}
                    cover={
                        <Image.PreviewGroup>
                            <Image
                                width="50%"
                                height="150px"
                                src='/images/iu/iu-beautiful-girl-4K.jpg'
                            />
                            <Image
                                width="50%"
                                height="150px"
                                src='/images/iu/iu-beautiful-korean-singer-4K.jpg'
                            />
                            <Image
                                width="50%"
                                height="150px"
                                src='/images/iu/iu-blueming-4K.jpg'
                            />
                        </Image.PreviewGroup>
                    }
                >
                    <Meta title={<p>hi</p>} description="ReactNode type :: 이곳에 댓글, 댓글입력"/>
                </Cards>
            </Col>
        </Row>

    );
}

export default Post;

const Cards = styled(Card)`
    margin: 30px 0;
`;
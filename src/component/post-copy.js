import React, {useCallback, useRef} from 'react';

import {Row, Col, Card} from 'antd';

import styled from 'styled-components';

const {Meta} = Card;

const Post = () => {
    const selectImages = useRef();
    const selectArrowLeft = useRef();
    const selectArrowRight = useRef();

    const onClickArrowRight = useCallback(() => {
        selectImages.current.childNodes.forEach((e, index) => {
            e.style.right = e.style.right.slice(0, 3) === '' ? '100%' : `${parseInt(e.style.right.slice(0, 3)) + 100}%`;

            if (index > 0) selectArrowLeft.current.style.display = 'block';
            if ((parseInt(e.style.right.slice(0, 3)) / 100) + 1 === selectImages.current.childNodes.length) {
                selectArrowRight.current.style.display = 'none';
            }
        });
    }, []);

    const onclickArrowLeft = useCallback(() => {
        selectImages.current.childNodes.forEach(e => {
            e.style.right = `${parseInt(e.style.right.slice(0, 3)) - 100}%`;
        });
    });

    return (
        <Row>
            <Col md={10} xs={24}>
                <Card
                    hoverable
                    style={{maxWidth: '100%'}}
                    cover={
                        <>
                            <ImageWrap ref={selectImages}>
                                <Img src='/images/iu/iu-beautiful-girl-4K.jpg' width="100%"
                                     height="100%"/>
                                <Img src='/images/iu/iu-beautiful-korean-singer-4K.jpg' width="100%"
                                     height="100%"/>
                                <Img src='/images/iu/iu-blueming-4K.jpg' width="100%" height="100%"/>
                            </ImageWrap>
                        </>
                    }

                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            </Col>
        </Row>

    );
}

export default Post;

const ImageWrap = styled.div`
  display: flex;
  //overflow: hidden;
`;

const Img = styled.img`
  position: relative;
`;

const ArrowLeft = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: black;
  border-radius: 50%;

  //display: none;
`;

const ArrowRight = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: grey;
  border-radius: 50%;
`;

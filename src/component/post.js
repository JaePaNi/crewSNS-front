import {Row, Col, Card} from 'antd';

const {Meta} = Card;

const Post = () => {
    return (
        <Row>
            <Col md={10} xs={24}>
                <Card
                    hoverable
                    style={{maxWidth: '100%'}}
                    cover={<div>
                        {/*<img src='../../public/img/iu/iu-beautiful-girl-4K.jpg'/>*/}
                        {/*<img src='../../public/img/iu/iu-beautiful-korean-singer-4K.jpg.jpg'/>*/}
                        {/*<img src='../../public/img/iu/iu-blueming-4K.jpg.jpg'/>*/}
                        {/*<img src={require('./test.png')}/>*/}
                    </div>}

                >
                    <Meta title="Europe Street beat" description="www.instagram.com"/>
                </Card>
            </Col>
        </Row>

    );
}

export default Post;
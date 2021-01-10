import { Card, Typography, Row, Col, Button } from 'antd';

const { Title } = Typography;

const Login = () => {
    return (
        <Card size="small" hoverable>
            <Row>
                <Col span={24} style={{textAlign:'center'}}><Title level={4}>JaePaNi님</Title></Col>
                <Col span={24}><Button block>로그아웃</Button></Col>
            </Row>
        </Card>
    );
}

export default Login;
import React, { useEffect } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';

const postAdd = (state) => {
    useEffect(() => {
        console.log(`state :: ${state}`);
    }, [state]);
    return (
        <Drawer
            title="Create a new account"
            width={720}
            onClose={state}
            visible={state}
            bodyStyle={{ paddingBottom: 80 }}
        >
            <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[{ required: true, message: 'Please enter user name' }]}
                        >
                            <Input placeholder="Please enter user name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="url"
                            label="Url"
                            rules={[{ required: true, message: 'Please enter url' }]}
                        >
                            <Input
                                style={{ width: '100%' }}
                                addonBefore="http://"
                                addonAfter=".com"
                                placeholder="Please enter url"
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    );
}

export default postAdd;
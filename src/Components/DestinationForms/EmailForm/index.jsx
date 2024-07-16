import React from "react";
import { Row, Col, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const { TextArea } = Input;

function Index() {
  return (
    <>
      <h2>Enter the following details</h2>
      <Row>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="email">
            <Input size="large" placeholder="Email" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="subject" layout="vertical">
            <Input placeholder="Subject" size="large" />
          </Form.Item>
        </Col>
        <Col span={21} offset={1}>
          <Form.Item name="text" layout="vertical">
            <TextArea placeholder="Text" rows={4} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Index;

import React from "react";
import { Row, Col, Form, Input } from "antd";

const { TextArea } = Input;

function Index() {
  return (
    <>
      <h2>Enter the following details</h2>
      <Row>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="amount">
            <Input size="large" placeholder="Amount" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="receiver" layout="vertical">
            <Input placeholder="Receiver" size="large" />
          </Form.Item>
        </Col>
        <Col span={21} offset={1}>
          <Form.Item name="Message" layout="vertical">
            <TextArea placeholder="Message" rows={4} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Index;

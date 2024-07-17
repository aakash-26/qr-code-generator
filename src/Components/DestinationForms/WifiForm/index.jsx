import React from "react";
import { Row, Col, Form, Input, Select, Checkbox } from "antd";

const { TextArea } = Input;

function Index() {
  return (
    <>
      <h2>Enter the following details</h2>
      <Row>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="encryption">
            <Select placeholder="Select Encryption" size="large">
              <Select.Option value="aes">AES</Select.Option>
              <Select.Option value="blowfish">Blowfish</Select.Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="password" layout="vertical">
            <Input.Password placeholder="Password" size="large" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="network_name" layout="vertical">
            <Input placeholder="SSID/network name" size="large" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="email">
            <Checkbox onChange={""}>Checkbox</Checkbox>
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Index;

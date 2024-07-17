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
          <Form.Item layout="vertical" name="first_name">
            <Input size="large" placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="company" layout="vertical">
            <Input placeholder="Company" size="large" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="last_name">
            <Input size="large" placeholder="Last Name" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="email" layout="vertical">
            <Input placeholder="Email" size="large" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="title">
            <Input size="large" placeholder="Title" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="street" layout="vertical">
            <Input placeholder="Subject" size="Street" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="phone">
            <Input size="large" placeholder="Phone" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="zip_code" layout="vertical">
            <Input placeholder="Zip Code" size="large" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="phone_mobile">
            <Input size="large" placeholder="Phone(mobile)" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="city" layout="vertical">
            <Input placeholder="City" size="large" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="email_business">
            <Input size="large" placeholder="Email(Business)" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="phone_business" layout="vertical">
            <Input placeholder="Phone(Business)" size="large" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="country">
            <Input size="large" placeholder="Country" />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="website" layout="vertical">
            <Input placeholder="Website" size="large" />
          </Form.Item>
        </Col>  
      </Row>
    </>
  );
}

export default Index;

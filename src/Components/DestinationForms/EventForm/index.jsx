import React from "react";
import { Row, Col, Form, Input, Select } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const { TextArea } = Input;

const timzeoneOptions = [
  {
    value: "GMT -12:00",
    label: "GMT -12:00",
  },
  {
    value: "GMT -11:00",
    label: "GMT -11:00",
  },
  {
    value: "GMT -10:00",
    label: "GMT -10:00",
  },
  {
    value: "GMT -09:00",
    label: "GMT -09:00",
  },
  {
    value: "GMT -08:00",
    label: "GMT -08:00",
  },
  {
    value: "GMT -07:00",
    label: "GMT -07:00",
  },
  {
    value: "GMT -06:00",
    label: "GMT -06:00",
  },
  {
    value: "GMT -05:00",
    label: "GMT -05:00",
  },
  {
    value: "GMT -04:00",
    label: "GMT -04:00",
  },
  {
    value: "GMT -03:00",
    label: "GMT -03:00",
  },
  {
    value: "GMT -02:00",
    label: "GMT -02:00",
  },
  {
    value: "GMT -01:00",
    label: "GMT -01:00",
  },
  {
    value: "GMT +01:00",
    label: "GMT +01:00",
  },
]

function Index() {
  return (
    <>
      <h2>Enter the following details</h2>
      <Row>
        <Col span={21} offset={1}>
          <Form.Item name="text" layout="vertical">
            <TextArea placeholder="Description" rows={4} />
          </Form.Item>
        </Col>
        <Col span={7} offset={1}>
          <Form.Item layout="vertical" name="from">
            <Input size="large" placeholder="From" />
          </Form.Item>
        </Col>
        <Col span={6} offset={1}>
          <Form.Item name="to" layout="vertical">
            <Input placeholder="TO" size="large" />
          </Form.Item>
        </Col>
        <Col span={6} offset={1}>
          <Form.Item name="timezone" layout="vertical">
            <Select
              showSearch
              placeholder="Select a Timezone"
              optionFilterProp="label"
              onChange={""}
              onSearch={""}
              options={timzeoneOptions}
            />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Index;

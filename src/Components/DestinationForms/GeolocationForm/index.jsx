import React from "react";
import { Row, Col, Form, Input, Radio } from "antd";

const { TextArea } = Input;

const LatitudeOptions = [
  { label: "N", value: "N" },
  { label: "S", value: "S" },
];

const LongitudeOptions = [
  { label: "W", value: "W" },
  { label: "O", value: "O" },
];

function Index() {
  return (
    <>
      <h2>Enter the following details</h2>
      <Row>
        <Col span={10} offset={1}>
          <Row>
            <Col span={14}>
              <Input placeholder="Latitude" size="large" />
            </Col>
            <Col span={10}>
              <Radio.Group
                size="large"
                value={"N"}
                optionType="button"
                buttonStyle="solid"
                options={LatitudeOptions}
              />
            </Col>
          </Row>
        </Col>
        <Col span={10} offset={1}>
          <Row>
            <Col span={14}>
              <Input placeholder="Longitude" size="large" />
            </Col>
            <Col span={10}>
              <Radio.Group
                size="large"
                value={"O"}
                optionType="button"
                buttonStyle="solid"
                options={LongitudeOptions}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Index;

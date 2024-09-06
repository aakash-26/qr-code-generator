import React from "react";
import "./index.css";
import { Row, Col, Button, Tabs } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: "Product",
    to: "/",
  },
  {
    key: "2",
    label: "Pricing",
    to: "/pricing",
  },
  // {
  //   key: '3',
  //   label: 'Enterprise',
  // },
  // {
  //     key: '4',
  //     label: 'Solution',
  // },
  // {
  //     key: '5',
  //     label: 'Help',
  // },
];

function index() {
  return (
    <>
      <Row>
        <Col span={6}>LOGO</Col>
        <Col span={14}>
          <Row>
            <Col offset={6}>
              {items.map((item) => {
                return (
                  <>
                    <Link to={item.to}>{item.label}</Link>
                    &nbsp;
                  </>
                );
              })}
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <Row>
            <Col span={12} className="text-center text-bold">
              <a>Sign In</a>
            </Col>
            <Col span={12} className="text-center">
              <Button type="primary" className="text-bold">
                Sign Up
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default index;

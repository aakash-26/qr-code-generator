import React from "react";
import "./index.css";
import { Row, Col, Card } from "antd";
import { FaLink } from "react-icons/fa6";

let destinationArray = [
  {
    id: 1,
    icon : <FaLink />,
    name: "URL",
  },
  {
    id: 2,
    icon : <FaLink />,
    name: "Text",
  },
  {
    id: 3,
    icon : <FaLink />,
    name: "Email",
  },
  {
    id: 4,
    icon : <FaLink />,
    name: "Call",
  },
  {
    id: 5,
    icon : <FaLink />,
    name: "SMS",
  },
  {
    id: 6,
    icon : <FaLink />,
    name: "VCard",
  },
  {
    id: 7,
    icon : <FaLink />,
    name: "Event",
  },
  {
    id: 8,
    icon : <FaLink />,
    name: "WiFi",
  }
];
function index() {
  return (
    <>
    <h4>Pattern</h4>
    <Row gutter={[8, 24]} style={{alignContent:"center !important", textAlign:"center"}}>
        {
            destinationArray.map((item) => (
                <Col span={4} style={{paddingLeft:"35px"}}>
                    <div className="icon-card">
                        {item.icon}
                    </div>
                </Col>
            ))
        }
        
    </Row>
    </>
  );
}

export default index;

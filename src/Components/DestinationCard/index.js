import React from "react";
import "./index.css";
import { Row, Col, Card } from "antd";
import { FaLink } from "react-icons/fa6";
import { icons } from "antd/es/image/PreviewGroup";

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
  },
  {
    id: 9,
    icon : <FaLink />,
    name: "Geolocation",
  },
  {
    id: 10,
    icon : <FaLink />,
    name: "Bitcoin",
  }
];
function index() {
  return (
    <>
      <Card className="content-card">
        <h2>Destination</h2>
        <Row gutter={[8, 24]} style={{alignContent:"center !important", textAlign:"center"}}>
            {
                destinationArray.map((item) => (
                    <Col span={12}>
                        <div className="icon-card">
                            {item.icon}
                        </div>
                        <div className="icon-name">
                            {item.name}
                        </div>
                    </Col>
                ))
            }
          
        </Row>
      </Card>
    </>
  );
}

export default index;

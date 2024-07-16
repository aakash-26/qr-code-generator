import React from "react";
import "./index.css";
import { Row, Col, Card } from "antd";
import { FaLink } from "react-icons/fa6";

let destinationArray = [
  {
    id: 1,
    name: "black",
  },
  {
    id: 2,
    name: "brown",
  },
  {
    id: 3,
    name: "red",
  },
  {
    id: 4,
    name: "pink",
  },
  {
    id: 5,
    name: "violet",
  },
  {
    id: 6,
    name: "blue",
  },
  {
    id: 7,
    name: "green",
  },
  {
    id: 8,
    name: "orange",
  },
  {
    id: 9,
    name: "yellow",
  },
  {
    id: 10,
    name: "purple",
  }
];
function index() {
  return (
    <>
    <h4>Color</h4>
    <Row gutter={[8, 24]} style={{alignContent:"center !important", textAlign:"center"}}>
        {
            destinationArray.map((item) => (
                <Col span={4} style={{paddingLeft:""}}>
                    <div className="icon-card">
                    <Card style={{backgroundColor:`${item.name}`, height:"40px", width:"40px"}}></Card>
                    </div>
                </Col>
            ))
        }
        
    </Row>
    </>
  );
}

export default index;

import { useEffect, useState, useContext } from 'react';
import React from "react";
import { Row, Col, Form, Input } from "antd";
import QrContext from '../../../Context/qrContext'

const { TextArea } = Input;

function Index() {

  const [emailQrData, setEmailQrData] = useState({})
  const {setQrInput} = useContext(QrContext)

  useEffect(() => {
    if(Object.keys(emailQrData).length == 3){
      setQrInput(`${emailQrData.email}?subject=${emailQrData.subject}&body=${emailQrData.body}`)
    }
  }, [emailQrData]);

  const onInputChange = (e, fieldLabel) => {
    console.log(e.target.value);
    setEmailQrData({...emailQrData, [fieldLabel]: e.target.value})
  };

  return (
    <>
      <h2>Enter the following details</h2>
      <Row>
        <Col span={10} offset={1}>
          <Form.Item layout="vertical" name="email">
            <Input size="large" placeholder="Email" onChange={(e)=>{onInputChange(e, "email")}} />
          </Form.Item>
        </Col>
        <Col span={10} offset={1}>
          <Form.Item name="subject" layout="vertical">
            <Input placeholder="Subject" size="large" onChange={(e)=>{onInputChange(e, "subject")}} />
          </Form.Item>
        </Col>
        <Col span={21} offset={1}>
          <Form.Item name="body" layout="vertical">
            <TextArea placeholder="Text" rows={4} onChange={(e)=>{onInputChange(e, "body")}} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}

export default Index;

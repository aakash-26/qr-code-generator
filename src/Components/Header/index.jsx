import React from 'react'
import './index.css'
import {Row, Col, Button, Tabs} from 'antd'

const items = [
    {
      key: '1',
      label: 'Product',
    },
    {
      key: '2',
      label: 'Pricing',
    },
    {
      key: '3',
      label: 'Enterprise',
    },
    {
        key: '4',
        label: 'Solution',
    },
    {
        key: '5',
        label: 'Help',
    },
  ];

function index() {
  return (
    <>
    <Row>
      <Col span={6}>LOGO</Col>
      <Col span={14}>
        <Row>
            <Col offset={6}>
            <Tabs 
                centered={true} 
                defaultActiveKey="1" 
                items={items}
                />
            </Col>
        </Row>
      </Col>
      <Col span={4}>
        <Row>
            <Col span={12} className='text-center text-bold'>
                <a>Sign In</a>
            </Col>
            <Col span={12} className='text-center'>
                <Button type='primary' className='text-bold'>Sign Up</Button>
            </Col>
        </Row>
      </Col>
    </Row>
    </>
  )
}

export default index
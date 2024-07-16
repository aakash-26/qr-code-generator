import React from 'react'
import { InputNumber } from 'antd'

function index() {
  return (
    <>
        <h2>Enter your phone</h2>
        <InputNumber size='large' placeholder='Enter phone' style={{height:"50px", width:"100%"}}  />
    </> 
  )
}

export default index
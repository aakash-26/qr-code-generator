import React from 'react'
import { Input } from 'antd'

const {TextArea} = Input
function index() {
  return (
    <>
        <h2>Enter your Text</h2>
        <TextArea rows={4} size='large' placeholder='Enter Text'  />
    </> 
  )
}

export default index
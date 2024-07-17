import React from 'react'
import { Input } from 'antd'
import QrContext from '../../../Context/qrContext'

function Index() {

  const {setQrInput} = React.useContext(QrContext)

  return (
    <>
        <h2>Enter your phone</h2>
        <Input size='large' placeholder='Enter phone' style={{height:"50px", width:"100%"}} onChange={(e)=>{setTimeout(()=>{setQrInput(e.target.value)}, 2000)}}  />
    </> 
  )
}

export default Index
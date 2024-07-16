import React, {useContext} from 'react'
import { Input } from 'antd'
import QrContext from '../../../Context/qrContext'

function Index() {
    
    const {setQrInput} = useContext(QrContext)

  return (
    <>
        <h2>Enter your website URL</h2>
        <Input size='large' placeholder='Enter URL' style={{height:"50px"}} onChange={(e)=>{setTimeout(()=>{setQrInput(e.target.value)}, 2000)}} />
    </> 
  )
}

export default Index
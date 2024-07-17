import React, {useContext} from 'react'
import { Input } from 'antd'
import QrContext from '../../../Context/qrContext'

const {TextArea} = Input
function Index() {

  const {setQrInput} = useContext(QrContext)
  
  return (
    <>
        <h2>Enter your Text</h2>
        <TextArea rows={4} size='large' placeholder='Enter Text' onChange={(e)=>{setTimeout(()=>{setQrInput(e.target.value)}, 2000)}}  />
    </> 
  )
}

export default Index
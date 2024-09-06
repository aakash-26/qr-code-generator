import React, {useContext} from 'react'
import { Input } from 'antd'
import QrContext from '../../../Context/qrContext'
import useDebounce from '../../../Hooks/useDebounce'

function Index() {
    
    const {setQrInput} = useContext(QrContext)

    const inputChange = (e) =>{
      console.log("here")
      setQrInput(e.target.value)
    }

      const debounceSearch = useDebounce(inputChange, 3000)

  return (
    <>
        <h2>Enter your website URL</h2>
        {/* <Input size='large' placeholder='Enter URL' style={{height:"50px"}} onChange={(e)=>{inputChange(e)}} /> */}
        <Input size='large' placeholder='Enter URL' style={{height:"50px"}} onChange={debounceSearch} />
    </> 
  )
}

export default Index
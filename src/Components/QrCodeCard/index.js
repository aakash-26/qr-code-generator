import {useContext, useEffect, useState} from "react";
import { QRCode } from 'antd';
import QrContext from '../../Context/qrContext'

function Index() {

  const {destination, qrInput} = useContext(QrContext)
  const [valueForQr, setValueForQr] = useState("")

  useEffect(()=> {
    generateValueForQr()
  },[qrInput])

  const generateValueForQr = () => {
    switch (destination) {
      case "URL":
        setValueForQr(`https://${qrInput}`)
        break;
      case "Text":
        setValueForQr(qrInput)
        break;
      case "Call":
        setValueForQr(`TEL:+91${qrInput}`)
        break;
      default:
        break;
    }
  }
  return (
    <>
      <h2>Preview QR Code</h2>
      <QRCode
        style={{
          marginBottom: 16,
          height: 350,
          width: 350
        }}
        errorLevel={'L'}
        value={valueForQr}
      />
    </>
  );
}

export default Index;

import { useEffect } from 'react'
import { useState } from 'react'

function useQrCodeValue(destination, input) {

    const [valueForQr, setValueForQr] = useState("")

    useEffect(() => {
        console.log("destination ", destination)
        console.log("input ", input)
        switch (destination) {
            case "URL":
              setValueForQr(`https://${input}`)
              break;
            case "Text":
              setValueForQr(input)
              break;
            case "Call":
              setValueForQr(`tel:+91${input}`)
              break;
            case "Email":
                setValueForQr(`mailto:${input}`)
                break
            default:
              break;
        }

      },[destination, input])

    return [valueForQr, setValueForQr]
}

export default useQrCodeValue
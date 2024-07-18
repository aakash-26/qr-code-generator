import React from "react";
import QrContext from "./qrContext";

const QrContextProvider = ({children}) => {
    const [destination, setDestination] = React.useState("URL")
    const [qrInput, setQrInput] = React.useState(null)
    const [qrColor, setQrColor] = React.useState("#000000")
    const [qrSize, setQrSize] = React.useState(300)
    const [renderType, setRenderType] = React.useState("canvas")
    return(
        <QrContext.Provider value={{destination, setDestination, qrInput, setQrInput, qrColor, setQrColor, qrSize, setQrSize, renderType, setRenderType}}>
            {children}
        </QrContext.Provider>
    )
}

export default QrContextProvider
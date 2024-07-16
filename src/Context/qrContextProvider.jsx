import React from "react";
import QrContext from "./qrContext";

const QrContextProvider = ({children}) => {
    const [destination, setDestination] = React.useState("URL")
    const [qrInput, setQrInput] = React.useState(null)
    return(
        <QrContext.Provider value={{destination, setDestination, qrInput, setQrInput}}>
            {children}
        </QrContext.Provider>
    )
}

export default QrContextProvider
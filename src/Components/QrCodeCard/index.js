import { useContext, useEffect, useState } from "react";
import { QRCode } from "antd";
import QrContext from "../../Context/qrContext";
import useQrCodeValue from "../../Hooks/useQrCodeValue";

function Index() {
  const { destination, qrInput, qrColor, qrSize, renderType } =
    useContext(QrContext);
  const [valueForQr] = useQrCodeValue(destination, qrInput);
  console.log("valueForQr ", valueForQr);

  function doDownload(url, fileName) {
    const a = document.createElement("a");
    a.download = fileName;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  return (
    <>
      {qrInput && (
        <>
          <h2>Preview QR Code</h2>
          <QRCode
            errorLevel={"H"}
            value={valueForQr}
            color={qrColor}
            size={qrSize}
            type={renderType}
          />
        </>
      )}
    </>
  );
}

export default Index;

import { useContext } from "react";
import { Slider, Button, Row, Col, Card, Segmented } from "antd";
import QrContext from "../../Context/qrContext";
import useThrottle from "../../Hooks/useThrottle";

function Index() {
  const { setQrSize, setRenderType } = useContext(QrContext);

  const downloadQr = () => {
    console.log("clicked")
  }
  const throttleFunction = useThrottle(downloadQr, 2000)


  return (
    <>
      <h4>Resolution</h4>
      <Slider
        max={300}
        defaultValue={300}
        tooltip={{
          open: true,
        }}
        onChange={(newValue) => {
          console.log("newValue ", newValue);
          setQrSize(newValue);
        }}
      />

      <Segmented
        block
        options={["canvas", "svg"]}
        size="large"
        onChange={(val) => setRenderType(val)}
      />
      <br />
      <Row>
        <Button onClick={throttleFunction} style={{ width: "100%" }} type="primary" size="large" danger>
        {/* <Button onClick={downloadQr} style={{ width: "100%" }} type="primary" size="large" danger> */}
          Download QR Code
        </Button>
      </Row>
    </>
  );
}

export default Index;

import { useContext } from "react";
import { Slider, Button, Row, Col, Card, Segmented } from "antd";
import QrContext from "../../Context/qrContext";

function Index() {
  const { setQrSize, setRenderType } = useContext(QrContext);

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
        <Button style={{ width: "100%" }} type="primary" size="large" danger>
          Download QR Code
        </Button>
      </Row>
    </>
  );
}

export default Index;

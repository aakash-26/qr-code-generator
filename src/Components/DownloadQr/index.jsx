import { Slider, Button, Row, Col, Card } from 'antd';

function index() {

    const imageTypes = [
        {
            name: "PNG"
        },
        {
            name: "JPEG"
        },
        {
            name: "SVG"
        }
    ]
  return (
    <>
      <h4>Resolution</h4>
      <Slider
        defaultValue={30}
        tooltip={{
        open: true,
        }}
    />
    <Row gutter={[8, 24]} style={{alignContent:"center !important", textAlign:"center"}}>
        {
            imageTypes.map((item) => (
                <Col span={8} style={{paddingLeft:""}}>
                    <div className="icon-card">
                    {item.name}
                    </div>
                </Col>
            ))
        }
        
    </Row>
    <br/>
    <Row>
    <Button style={{width: "100%"}} type="primary" size='large' danger>Download QR Code</Button>
    </Row>
    </>
  );
}

export default index;

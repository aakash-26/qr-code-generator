import React, { useContext } from "react";
import "./index.css";
import { Card, Radio, Flex, Tooltip, Segmented } from "antd";
import { CiText } from "react-icons/ci";
import { ImLink } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { LiaSmsSolid } from "react-icons/lia";
import { BsPersonVcardFill } from "react-icons/bs";
import { SlEvent } from "react-icons/sl";
import { FiWifi } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { LiaBitcoin } from "react-icons/lia";
import QrContext from "../../Context/qrContext";

let destinationArray = [
  {
    id: 1,
    icon: <ImLink />,
    name: "URL",
  },
  {
    id: 2,
    icon: <CiText />,
    name: "Text",
  },
  {
    id: 3,
    icon: <TfiEmail />,
    name: "Email",
  },
  {
    id: 4,
    icon: <BiSolidPhoneCall />,
    name: "Call",
  },
  {
    id: 5,
    icon: <LiaSmsSolid />,
    name: "SMS",
  },
  {
    id: 6,
    icon: <BsPersonVcardFill />,
    name: "VCard",
  },
  {
    id: 7,
    icon: <SlEvent />,
    name: "Event",
  },
  {
    id: 8,
    icon: <FiWifi />,
    name: "WiFi",
  },
  {
    id: 9,
    icon: <GrLocation />,
    name: "Geolocation",
  },
  {
    id: 10,
    icon: <LiaBitcoin />,
    name: "Bitcoin",
  },
];

function Index() {
  const { setDestination, setQrInput } = useContext(QrContext);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setDestination(e.target.value);
    setQrInput(null);
  };

  return (
    <>
      <Card className="content-card">
        <h2>Destination</h2>
        <Flex vertical gap="middle">
          <Radio.Group defaultValue="URL" size="large" onChange={onChange}>
            {destinationArray.map((item) => (
              <>
                <Tooltip title={item.name}>
                  <Radio.Button
                    className="destination-icon-card"
                    value={item.name}
                  >
                    <div style={{ paddingTop: "10px" }}>{item.icon}</div>
                  </Radio.Button>
                </Tooltip>
              </>
            ))}
          </Radio.Group>
        </Flex>
      </Card>
    </>
  );
}

export default Index;

// destinationArray.map((item) => (
// <Col span={12} onClick={clickFunction.bind(this)}>
//     <div className="icon-card">
//         {item.icon}
//     </div>
//     <div className="icon-name">
//         {item.name}
//     </div>
// </Col>
// ))

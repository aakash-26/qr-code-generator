import { useContext } from "react";
import "./index.css";
import { Flex, Radio, Tooltip, Segmented, Row, Col } from "antd";
import QrContext from "../../Context/qrContext";

const colors = [
  { id: 1, name: "black", hashcode: "#000000" },
  { id: 2, name: "red", hashcode: "#FF0000" },
  { id: 3, name: "green", hashcode: "#008000" },
  { id: 4, name: "blue", hashcode: "#0000FF" },
  { id: 5, name: "yellow", hashcode: "#FFFF00" },
  { id: 6, name: "purple", hashcode: "#800080" },
  { id: 7, name: "orange", hashcode: "#FFA500" },
  { id: 8, name: "pink", hashcode: "#FFC0CB" },
  { id: 9, name: "brown", hashcode: "#A52A2A" },
  { id: 10, name: "gray", hashcode: "#808080" },
  { id: 11, name: "cyan", hashcode: "#00FFFF" },
  { id: 12, name: "magenta", hashcode: "#FF00FF" },
  { id: 13, name: "lime", hashcode: "#00FF00" },
  { id: 14, name: "indigo", hashcode: "#4B0082" },
];

function Index() {
  const { setQrColor } = useContext(QrContext);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setQrColor(e.target.value);
  };

  const segmentedOptions = colors.map((color) => ({
    label: (
      <p>
        <p
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: color.hashcode,
            display: "inline-block",
            marginRight: "8px",
          }}
        ></p>
        {/* {color.name} */}
      </p>
    ),
    value: color.id,
  }));

  return (
    <>
      <h2>Select Color</h2>
      <Flex vertical gap="middle">
        <Radio.Group defaultValue="URL" size="large" onChange={onChange}>
          {colors.map((item) => (
            <>
              <Tooltip title={item.name}>
                <Radio.Button className="color-icon-card" value={item.hashcode}>
                  <div
                    style={{
                      paddingTop: "40px",
                      marginTop: "8px",
                      backgroundColor: `${item.hashcode}`,
                    }}
                  ></div>
                </Radio.Button>
              </Tooltip>
            </>
          ))}
        </Radio.Group>
      </Flex>
    </>
  );
}

export default Index;

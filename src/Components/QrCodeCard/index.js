import {useState} from "react";
import { Input, QRCode, Segmented } from 'antd';

function index() {
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
        value="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
    </>
  );
}

export default index;

import React from 'react'
import './index.css'
import {Row, Col, Card} from 'antd';
import DestinationCard from '../DestinationCard'
import PatternCard from '../PatternCard'
import ColorCard from '../ColorCard'
import InputContent  from '../InputContent'
import QrCodeCard from'../QrCodeCard'
import DownloadQr from '../DownloadQr'

function index() {
  return (
    <>
        <Row className='main-content-row'>
            <Col offset={1} span={22} className='title-col'>
                <h1 style={{fontSize:"70px", fontFamily: "Titillium"}}>
                    QR Code Maker for your business
                </h1>
                <h2>
                    Create a QR Code for free
                </h2>
            </Col>
        </Row>
        <Row className='main-content-row'>
            <Col span={5} offset={1}>
                <DestinationCard />
            </Col>
            <Col span={10} offset={1}>
            <Card className='content-card'>
                <InputContent />
                {/* <PatternCard /> */}
                <ColorCard />
            </Card>
            </Col>
            <Col span={5} offset={1}>
            <Card className='content-card'>
                <QrCodeCard />
                <DownloadQr />
            </Card>
            </Col>
        </Row>
    </>
  )
}

export default index
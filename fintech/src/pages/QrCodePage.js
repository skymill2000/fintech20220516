import React from 'react'
import AppBar from '../components/common/AppBar'
import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  return (
    <>
        <AppBar title={"QR 코드"}></AppBar>
        <QRBlock>
            <QRCodeSVG size={200} value="fintech use no" />
        </QRBlock>
    </>
  )
}

export default QrCodePage
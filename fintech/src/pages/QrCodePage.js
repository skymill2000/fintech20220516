import React from 'react'
import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import AppBar from '../components/common/AppBar'

const QRBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const QrCodePage = () => {
  const { search } = useLocation(); //query string get
  const { fintechUseNo } = queryString.parse(search);
  
  return (
    <>
        <AppBar title={"QR 코드"}></AppBar>
        <QRBlock>
            <QRCodeSVG size={200} value={fintechUseNo} />
        </QRBlock>
    </>
  )
}

export default QrCodePage
import React,{useState} from 'react'
import AppBar from '../components/common/AppBar'
import QrReader from 'react-web-qr-reader';

const QrCodeReaderPage = () => {
    const CustomStyles = {
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: "9",
        },
        content: {
          width: "95%",
          border: `0 solid black`,
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          zIndex: "99999",
        },
      };
    
    const [result, setResult] = useState('No result');
    
    const handleScan = (result) => {
      if (result) {
        setResult(result);
      }
    };
    
    const handleError = (error) => {
      console.log(error);
    };
    
    return(    
      <>
        <AppBar title={"QR 리더"}/>
        <QrReader
          delay={200}
          style={CustomStyles}
          onError={handleError}
          onScan={handleScan}
        />
        <p>{result}</p>
      </>
  )
}

export default QrCodeReaderPage
import React,{useState} from 'react'
import AppBar from '../components/common/AppBar'
import { QrReader } from 'react-qr-reader';

const QrCodeReaderPage = () => {

    const [result, setResult] = useState('')

    const handleScan = (result, error) => {
        if (!!result) {
            setResult(result?.text);
        }
        if (!!error) {
        }
    }
    
    return(    
      <>
        <AppBar title={"QR 리더"}/>
        <QrReader onResult={handleScan}/>
      <p>{result}</p>

      </>
  )
}

export default QrCodeReaderPage
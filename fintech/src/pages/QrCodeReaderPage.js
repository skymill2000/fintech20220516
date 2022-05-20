import React,{useState} from 'react'
import AppBar from '../components/common/AppBar'
import { QrReader } from 'react-qr-reader';

const QrCodeReaderPage = () => {

    const [result, setResult] = useState('')

    const handleScan = (result, error) => {
        if (!!result) {
            console.log(result.text);
            setResult(result.text);
        }
        if (!!error) {
        }
    }
    
    return(    
      <>
        <AppBar title={"QR 리더"}/>
        <QrReader 
            onResult={handleScan}
            style={{ width: '100%' }}
        />
      <p>{result}</p>

      </>
  )
}

export default QrCodeReaderPage
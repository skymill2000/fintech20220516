import React,{useState} from 'react'
import AppBar from '../components/common/AppBar'
import { QrReader } from 'react-qr-reader';
import Modal from 'react-modal';

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
    
    const [result, setResult] = useState('')
    const [openModal, setOpenModal] = useState(false); //no camera : true

    const handleScan = (result, error) => {
        if (!!result) {
            console.log(result.text);
            setOpenModal(true);
            setResult(result.text);
        }
        if (!!error) {
        }
    }

    const closeModal = () =>{
        setOpenModal(false);
    }
    
    return(    
      <>
        <AppBar title={"QR 리더"}/>
        <QrReader 
            onResult={handleScan}
            style={{ width: '100%' }}
            scanDelay={1000}
        />
        <p>{result}</p>
        <Modal
            isOpen={openModal}
            style={CustomStyles}
            onRequestClose={closeModal}
        >

        </Modal>
      </>
  )
}

export default QrCodeReaderPage
import React, { useState } from 'react'
import AppBar from '../components/common/AppBar';
import axios from 'axios';

const AxiosTest = () => {
  const [data, setData] = useState();
  const handleClick = () => {
    axios.get('https://api.sampleapis.com/avatar/info').then((data) => {
        console.log(data);
    });
  }  

  return (
    <>
      <AppBar title={"통신테스트"}/>
      <button onClick={handleClick}>데이터 Request(요청)</button>
    </>
  )
}

export default AxiosTest
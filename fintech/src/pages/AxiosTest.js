import React, { useState } from 'react'
import AppBar from '../components/common/AppBar';

const AxiosTest = () => {
  const [data, setData] = useState();
  const handleClick = () => {
    console.log('hello');
  }  

  return (
    <>
      <AppBar title={"통신테스트"}/>
      <button onClick={handleClick}>데이터 Request(요청)</button>
    </>
  )
}

export default AxiosTest
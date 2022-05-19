import React, { useState } from 'react'
import AppBar from '../components/common/AppBar'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

const AuthResultPage = () => {
  const { code } = queryString.parse(useLocation().search);
  const [accessToken, setAccessToken] = useState('토큰이 없습니다.')
  const [userSeqNo, setUserSeqNo] = useState('사용자 번호가 없습니다.')

  const handleGetAccessToeknClick = () => {
    const sendData = {
        code: code,
        client_id:"q7kH44ThJwjpvNRg0BbJvE1yxvx5X53DKz1rNgPF",
        client_secret:"yVT6irMr2h4ZTHzZY7sDpbvhm1nlOzr4nP7DYRVy",
        redirect_uri:"http://localhost:3000/authResult",
        grant_type:"authorization_code",
    }
    // ****** 본인 client Id 와 Secret Value 로 변경 바랍니다. ******

    const encodedData = queryString.stringify(sendData);

    const option = {
        method : "",
        url: "",
        header: {

        },
        data: 
    }

    axios(option).then((response) => {
        console.log(response)
    })
  }

  return (
    <>
        <AppBar title={"인증결과"}></AppBar>
        <p>인증코드 : {code}</p>
        <button onClick={handleGetAccessToeknClick}> 인증 요청 </button>
        <p>accessToken : {accessToken}</p>
        <p>userSeqNo : {userSeqNo}</p>
    </>
  )
}

export default AuthResultPage
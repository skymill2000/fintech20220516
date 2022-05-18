import React from 'react'
import styled from 'styled-components'
import AppBar from '../components/common/AppBar'

const AuthButton = styled.button`
    border: 1px dotted #000;
    background-color: #282c34;
    color: white;
    text-align: center;
`

const AuthPage = () => {

  const handleAuthButtonClick = () => {
    alert("click!");  
    const clientId = ""
    // ****** 여러분들의 clientId 입력해주세요 ******
    const authPageUrl = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`
    //새창으로 인증사이트를 오픈 
  }

  return (
    <>
        <AppBar title={"사용자 인증"}></AppBar>
        <AuthButton onClick={handleAuthButtonClick}>사용자 인증</AuthButton>
    </>
  )
}

export default AuthPage
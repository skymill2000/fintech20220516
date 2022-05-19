import React from 'react'
import AppBar from '../components/common/AppBar'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const AuthResultPage = () => {
  const parsed = queryString.parse(useLocation().search);
  console.log(parsed);
  return (
    <>
        <AppBar title={"인증결과"}></AppBar>

    </>
  )
}

export default AuthResultPage
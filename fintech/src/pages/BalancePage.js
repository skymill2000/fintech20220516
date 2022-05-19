import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import BalanceCard from '../components/balance/BalanceCard'
import AppBar from '../components/common/AppBar'

const BalancePage = () => {
  const { fintechUseNo } = queryString.parse(useLocation().search);

  //잔액 저장 스테이트
  useEffect(()=>{
    console.log(fintechUseNo)
  })  

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "" + countnum; //이용기관번호 본인것 입력
    return transId;
  };
  
  const getBalance = () =>{
      //계좌 잔액 조회 API 호출
  }

  return (
    <>
        <AppBar title={"잔액조회"}/>
        <BalanceCard bankName={"테스트"} fintechNo={"테스트"} balance={"테스트"}></BalanceCard>
    </>
  )
}

export default BalancePage
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import BalanceCard from '../components/balance/BalanceCard'
import AppBar from '../components/common/AppBar'
import axios from 'axios';
import TransactionList from '../components/balance/TransactionList';

const BalancePage = () => {
  //url QueryString : fintechUseNo=199159919057870978216487
  //const queryStringValue = useLocation().search;
  //const queryStringObj = queryString.parse(queryStringValue);
  //const fintechUseNo = queryStringObj.fintechUseNo;

  const { fintechUseNo } = queryString.parse(useLocation().search);
  const accessToken = localStorage.getItem('accessToken');
  const [balance, setBalance] = useState("0");
  const [transactionList, setTransactionList] = useState([]);
  //잔액 저장 스테이트

  useEffect(()=>{
    console.log(fintechUseNo)
    getBalance();
    getTransctionList();
  },[])  

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기관번호 본인것 입력
    return transId;
  };
  
  const getBalance = () =>{
      //계좌 잔액 조회 API 호출
    const sendData = {
        tran_dtime: "20220519143200",
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo
    }

    const option = {
        method : "GET",
        url: `/v2.0/account/balance/fin_num`,
        headers: {
            Authorization : `Bearer ${accessToken}`
        },
        params : sendData
    }
    
    axios(option).then(({data}) => {
        console.log(data);
        setBalance(data);
    })
  }

  const getTransctionList = () => {
    const sendData = {
        bank_tran_id: genTransId(),
        fintech_use_num: fintechUseNo,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20220101",
        to_date: "20220101",
        sort_order: "D", 
        tran_dtime: "20220519160200",
    }

    const option = {
        method : "GET",
        url: `/v2.0/account/transaction_list/fin_num`,
        headers: {
            Authorization : `Bearer ${accessToken}`
        },
        params : sendData
    }
    
    axios(option).then(({data}) => {
        console.log(data);
        setTransactionList(data.res_list);
    })
  }

  return (
    <>
        <AppBar title={"잔액조회"}/>
        <BalanceCard bankName={balance.bank_name} fintechNo={balance.fintech_use_num} balance={balance.balance_amt}></BalanceCard>
        <TransactionList transactionList={transactionList}></TransactionList>
    </>
  )
}

export default BalancePage
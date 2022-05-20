import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  
  const [amount, setamount] = useState("");

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "T991599190U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };    
     
  const handlePayButtonClick = () => {
    //#work8 출금 이체 axios 요청
    //...

    const sendData = {
        "bank_tran_id": genTransId(),
        "cntr_account_type": "N",
        "cntr_account_num": "7832932596",
        "dps_print_content": "쇼핑몰환불",
        "fintech_use_num": fintechUseNo,
        "wd_print_content": "오픈뱅킹출금",
        "tran_amt": amount,
        "tran_dtime": "20190910101921",
        "req_client_name": "홍길동",
        "req_client_fintech_use_num": fintechUseNo,
        "req_client_num": "HONGGILDONG1234",
        "transfer_purpose": "TR",
        "recv_client_name": "진상언",
        "recv_client_bank_code": "097",
        "recv_client_account_num": "7832932596"    
    }

    const option = {
        method: "POST",
        url: "/v2.0/transfer/withdraw/fin_num",
        headers: {
          Authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        data: sendData,
    };

    axios(option).then(({data})=>{
        console.log(data);
        deposit();
    })
    //...
  } 

  const deposit = () =>{
    const twoLeggedToken = ""
    //입금 요청 
    //axios
  }


  const handleChange = (e) => {
    const {value} = e.target;
    setamount(value);
  }

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}로 돈을 보냅니다.</p>
      <input onChange={handleChange}></input>
      <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
    </ModalCardBlock>
  )
}

export default ModalCard
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AppBar from '../components/common/AppBar'

const MainPage = () => {
  const [accountList, setAccountList] = useState([]);
  const accessToken = localStorage.getItem('accessToken');
  const userSeqNo = localStorage.getItem('userSeqNo');

  useEffect(() => {
    getUserAccountList();
  },[]);

  const getUserAccountList = () => {
    // 사용자 데이터를 조회하는 AXIOS 요청을 작성 바랍니다.
    // hint : Method GET 때문에 요청하는 데이터는 option= { ... params : 에 데이터를 전달 }
    // token : headers : { Authorizaion : `bearer {여러분들의 토큰}` }

    console.log(userSeqNo)

    const sendData = {
        user_seq_no : userSeqNo
    }

    const option = {
        method : "GET",
        url: `/v2.0/user/me`,
        headers: {
            Authorization : `Bearer ${accessToken}`
        },
        params : sendData
    }
    
    axios(option).then(({data}) => {
        console.log(data);
        setAccountList(data.res_list);
    })

  }

  return (
    <>
        <AppBar title={"메인페이지"}/>
        {/* fintech_use_no 을 반복문을 통해 출력 */}
        {accountList.map((account)=>{
            return <p>{account.fintech_use_num}</p>
        })}
    </>
  )
}

export default MainPage
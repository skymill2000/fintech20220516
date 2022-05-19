import React, { useEffect } from 'react'
import AppBar from '../components/common/AppBar'

const MainPage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const userSeqNo = localStorage.getItem('useSeqNo');

  console.log(accessToken, userSeqNo);

  useEffect(() => {
    getUserAccountList();
  },[]);

  const getUserAccountList = () => {
    // 사용자 데이터를 조회하는 AXIOS 요청을 작성 바랍니다.
    // hint : Method GET 때문에 요청하는 데이터는 option= { ... params : 에 데이터를 전달 }
    // token : headers : { Authorizaion : `bearer {여러분들의 토큰}` }
  }

  return (
    <>
        <AppBar title={"메인페이지"}/>
        {/* fintech_use_no 을 반복문을 통해 출력 */}
    </>
  )
}

export default MainPage
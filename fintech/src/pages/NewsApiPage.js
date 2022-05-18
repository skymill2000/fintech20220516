import React, { useState } from 'react'
import axios from 'axios'

import AppBar from '../components/common/AppBar'
import SearchInput from '../components/news/SearchInput'
import SearchResult from '../components/news/SearchResult'

const NewsApiPage = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchList, setSearchList] = useState([]);
  
  const searchInputHandleChange = (event) => {
    // 검색어를 변경합니다.
    const {value} = event.target;
    setSearchInput(value);
    console.log(searchInput);
  }

  const searchButtonHandleClick = () => {
    // 검색 버튼을 클릭합니다.
    // searchInput의 데이터를 가지고와 Axios 요청 작성
    console.log("click!")
    const url = "";
    axios.get(url).then((response) => {
        console.log(response.data);
        setSearchList(response.data)
    });
  }
  
  return (
    <>
        <AppBar title={"뉴스검색"}></AppBar>
        {/* 검색어 입력 컴포넌트 */}
        <SearchInput 
            handleChange={searchInputHandleChange}
            handleClick={searchButtonHandleClick}>
        </SearchInput>
        {/* 검색 결과 출력 컴포넌트 */}
        <SearchResult searchList={searchList}></SearchResult>
    </>
  )
}

export default NewsApiPage
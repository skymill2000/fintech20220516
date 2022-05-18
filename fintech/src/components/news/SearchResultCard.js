import React from 'react'
import styled from 'styled-components'

const CardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #dfdfdf solid;
`;

const CardTitle = styled.div`
  font-size: 1rem;
`;


const SearchResultCard = ({title, link, imageUrl}) => {
  return (
    <CardBlock>
        <CardTitle>{title}</CardTitle>
        <img src={imageUrl}></img>
        <a href={link}>기사로 이동하기</a>
    </CardBlock>
  )
}

export default SearchResultCard
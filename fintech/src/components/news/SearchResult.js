import React from 'react'
import styled from 'styled-components'
import SearchResultCard from './SearchResultCard'

const SearchResultBlock = styled.div`
    margin : 10px
`

const SearchResult = ({searchList}) => {
  return (
    <SearchResultBlock>
        {
            searchList.map(({title,url})=>{
                return (<SearchResultCard title={title} link={url}></SearchResultCard>)
            })
        }
    </SearchResultBlock>
  )
}

export default SearchResult
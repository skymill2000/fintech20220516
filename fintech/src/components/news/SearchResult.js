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
            searchList.map(({title, url, urlToImage})=>{
                return (<SearchResultCard title={title} link={url} imageUrl={urlToImage}></SearchResultCard>)
            })
        }
    </SearchResultBlock>
  )
}

export default SearchResult
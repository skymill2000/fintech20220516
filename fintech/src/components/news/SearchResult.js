import React from 'react'

const SearchResult = ({searchList}) => {
  return (
    <>
        {
            searchList.map(({title})=>{
                return (<p>{title}</p>)
            })
        }
    </>
  )
}

export default SearchResult
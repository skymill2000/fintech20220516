import React from 'react'

const SearchInput = ({handleChange, handleClick}) => {
  return (
    <>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>검색</button>
    </>
  )
}

export default SearchInput
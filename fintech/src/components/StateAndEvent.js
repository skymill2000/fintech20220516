import React from 'react'

const StateAndEvent = () => {
  
  let userText = "사용자 입력 내용";

  const handleClick = () => {
      alert("test");
  }

  const handleChange = (event) => {
    const {value} = event.target;
    userText = value;
    console.log(userText);
  }

  return (
    <>
        <p>{userText}</p>
        <input onChange={handleChange}></input>
        <button onClick={handleClick}>데이터 변경</button>
    </>
  )
}

export default StateAndEvent
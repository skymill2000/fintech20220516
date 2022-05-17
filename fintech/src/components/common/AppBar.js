import React from 'react'
import styled from 'styled-components';

const AppBarBlock = styled.div`
    border-bottom: 1px dotted #000;
    background-color: #282c34;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
`

const AppBar = ({title}) => {
  return (
    <AppBarBlock>{title}</AppBarBlock>
  )
}

export default AppBar
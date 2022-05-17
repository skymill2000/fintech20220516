import React from 'react'
import styled from 'styled-components';

const AppBarBlock = styled.div`
    border-bottom: 1px dotted #000;
    text-align: center;
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
`

const AppBar = () => {
  return (
    <AppBarBlock>AppBar</AppBarBlock>
  )
}

export default AppBar
import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
  height: 30px;
  padding: 5px 8px;
  background: rgb(2, 106, 167);
  background: rgba(0,0,0,.15);
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
`

const StyledHeaderTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  color: #fff;
`
export default () => (
  <StyledHeader>
    <StyledHeaderTitle>Trollo Boards</StyledHeaderTitle>
  </StyledHeader>
)
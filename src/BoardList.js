import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';


const StyledBoardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`

const BoardList = () => {
  return (
    <StyledBoardList>
      <Board/>
    </StyledBoardList>
  )
}

export default BoardList;
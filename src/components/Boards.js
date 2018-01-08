import React, { Component } from 'react';
import styled from 'styled-components';
import BoardList from './BoardList';

const StyledBoardListContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`

class Boards extends Component {
  render() {
    return (
      <StyledBoardListContainer>
        <h2>Your Boards</h2>
        <BoardList/>
      </StyledBoardListContainer>
    )
  }
}

export default Boards;
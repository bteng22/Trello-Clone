import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import CreateBoard from './CreateBoard';

const StyledBoardListContainer = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`

const StyledBoardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`

const renderBoards = (boards) => {
  return boards.map((board) => {
    return (
      <Board key={board.title} {...board} />
    )
  })
}

class BoardList extends Component {
  render() {
    return (
      <StyledBoardListContainer>
        <h2>Your Boards</h2>
        <StyledBoardList>
          { renderBoards(this.props.boards) }
          <CreateBoard />
        </StyledBoardList>
      </StyledBoardListContainer>
    )
  }
}

export default BoardList;
import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import CreateBoard from './CreateBoard';

const fakeBoardData = [
  {
    title: 'Todo'
  },
  {
    title: 'Grocery List'
  },
  {
    title: 'To Watch'
  }
]

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
  constructor(props) {
    super(props);
    this.state = { boards: fakeBoardData }

    this.renderBoards = this.renderBoards.bind(this);
  }

  renderBoards(boards) {
    return boards.map((board) => {
      return (
        <Board 
          {...board}
          key={board.title} />
      )
    })
  }

  render() {
    return (
      <StyledBoardListContainer>
        <h2>Your Boards</h2>
        <StyledBoardList>
          { renderBoards(this.state.boards) }
          <CreateBoard />
        </StyledBoardList>
      </StyledBoardListContainer>
    )
  }
}

export default BoardList;
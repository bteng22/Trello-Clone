import React, { Component } from 'react';
import styled from 'styled-components';
import Board from './Board';
import CreateBoard from './CreateBoard';
import storage from '../storage';

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

const BOARDS_KEY = 'boards';

class BoardList extends Component {
  constructor(props) {
    super(props);
    this.state = { boards: [] }

    this.renderBoards = this.renderBoards.bind(this);
    this.createBoard = this.createBoard.bind(this);
    this.syncBoardsWithLocalStorage = this.syncBoardsWithLocalStorage.bind(this);
  }

  syncBoardsWithLocalStorage() {
    this.setState({
      boards: storage(localStorage).get(BOARDS_KEY) || []
    })
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

  createBoard(boardData) {
    this.setState({
      boards: this.state.boards.concat(boardData)
    })
  }

  componentDidMount() {
    this.syncBoardsWithLocalStorage()
  }

  componentDidUpdate() {
    storage(localStorage).set(BOARDS_KEY, this.state.boards);
  }

  render() {
    return (
      <StyledBoardListContainer>
        <h2>Your Boards</h2>
        <StyledBoardList>
          { this.renderBoards(this.state.boards) }
          <CreateBoard createBoard={this.createBoard}/>
        </StyledBoardList>
      </StyledBoardListContainer>
    )
  }
}

export default BoardList;
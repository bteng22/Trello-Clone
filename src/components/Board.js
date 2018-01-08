import React, { Component } from 'react';
import styled from 'styled-components';
import BoardForm from './BoardForm';

const StyledBoardListItem = styled.li`
  width: 25%;
  max-width: 300px;
  min-height: 100px;
`
const StyledBoardButton = styled.button`
  width: 85%;
  height: 80px;
  background: #e2e4e6;
  border: none;
  border-radius: 3px;
  font-size: 0.875em;
  font-weight: 500;
  color: #838c91;
  cursor: pointer;

  transition background 0.2s, color 0.2s;

  &:hover {
    background: #d6d8db;
    color: #026aa7;
  }

  // > span {
  //   display: inline-block;
  //   width: 100%;
  //   height: 100%;
  //   text-align: left;
  // }
`

const CreateBoardButton = (props) => {
  return (
    <StyledBoardButton onClick={props.handleClick}>
      Create a new board...
    </StyledBoardButton>
  )
}

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayForm: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      displayForm: !prevState.displayForm
    }));
  }
  
  render() {
    return (
      <StyledBoardListItem>
        { this.state.displayForm ? <BoardForm handleClick={this.handleClick} /> :
        <CreateBoardButton handleClick={this.handleClick} /> }
      </StyledBoardListItem>
    )
  }
}

export default Board;
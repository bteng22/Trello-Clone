import React, { Component } from 'react';
import styled from 'styled-components';
import BoardForm from './BoardForm';
import { StyledBoardListItem } from './Board';

const StyledBoardButton = styled.button`
  width: 90%;
  height: 80px;
  background: #e2e4e6;
  border: none;
  border-radius: 3px;
  font-size: 0.875em;
  font-weight: 500;
  color: #838c91;
  cursor: pointer;

  &:hover {
    background: #d6d8db;
    color: #026aa7;
  }
`

class CreateBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { displayForm: false };
    
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState(prevState => ({
      displayForm: !prevState.displayForm
    }));
  }

  render() {
    return (
      <StyledBoardListItem>
        {this.state.displayForm ?
          (<BoardForm toggleForm={this.toggleForm} createBoard={this.props.createBoard} />) :
          (<StyledBoardButton onClick={this.toggleForm}>
            Create a new board...
          </StyledBoardButton>)
        }
      </StyledBoardListItem>
    )
  }
}

export default CreateBoard;
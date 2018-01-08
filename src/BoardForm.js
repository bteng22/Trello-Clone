import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBoardForm = styled.form`
  width: 85%;
  height: 100%;
  border: 1px solid #d6dadc;
`

const StyledBoardFormHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 32px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 10px;
    border-bottom: 1px solid #d6dadc;
    color: #838c91;
  }
`

const StyledBoardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  
  > *:not(:last-child) {
    margin-bottom: 7px;
  }

  > label {
    font-size: 1em;
    font-weight: 700;
  }

  > input {
    padding: 7px;
    font-size: 0.875em;
  }
`

const StyledSubmitButton = styled.input.attrs({
  type: "submit",
  value: "Create"
})`
  width: 40%;
  padding: 0 30px;
  background: #5aac44;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;

  :hover {
    background: #57a441;
  }
`

class BoardForm extends Component {
  render() {
    return (
      <StyledBoardForm>
        <StyledBoardFormHeader>
          <div>
            Create Board
            <i onClick={this.props.handleClick}>x</i>
          </div>
        </StyledBoardFormHeader>
        <StyledBoardFormContainer>
          <label>Title</label>
          <input type="text"></input>
          <StyledSubmitButton/>
        </StyledBoardFormContainer>
      </StyledBoardForm>
    )
  }
}

export default BoardForm;
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledBoardForm = styled.form`
  width: 90%;
  height: 100%;
  border: 1px solid #d6dadc;
`

const StyledBoardFormHeader = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 34px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 10px;

    position: relative;

    border-bottom: 1px solid #d6dadc;
    color: #838c91;
  }

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%
  }
`

const StyledBoardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  
  > *:not(:last-child) {
    margin-bottom: 10px;
  }

  > label {
    font-size: 1em;
    font-weight: 700;
  }
`

const StyledBoardFormInput = styled.input.attrs({
  type: "text",
  placeHolder: 'Like "To-do list" for example...'
})`
  background: #e4e5e7;
  padding: 7px;
  font-size: 0.875em;

  -webkit-appearance: none;
  border: 1px solid #d6dadc;
  border-radius: 3px;

  &:focus, &:active {
    background: #fff;
  }
`

const StyledSubmitButton = styled.input.attrs({
  type: "submit",
  value: "Create"
})`
  width: 40%;
  padding: 7px 0;
  background: #5aac44;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 0.875em;

  :hover {
    background: #57a441;
  }
`

const StyledIcon = styled.i`
  position: absolute;
  right: 0;
  padding: 7px;

  font-style: normal;
  cursor: pointer;
`

class BoardForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.createBoard({
      title: this.state.title
    });

    this.props.toggleForm();
    this.setState({ title: '' });
  }

  render() {
    return (
      <StyledBoardForm onSubmit={this.handleSubmit} >
        <StyledBoardFormHeader>
          <div>
            <span>Create Board</span>
            <StyledIcon onClick={this.props.toggleForm}>x</StyledIcon>
          </div>
        </StyledBoardFormHeader>
        <StyledBoardFormContainer>
          <label>Title</label>
          <StyledBoardFormInput
            value={this.state.title}
            onChange={this.handleChange}/>
          <StyledSubmitButton/>
        </StyledBoardFormContainer>
      </StyledBoardForm>
    )
  }
}

export default BoardForm;
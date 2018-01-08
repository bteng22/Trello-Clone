import React, { Component } from 'react';
import styled from 'styled-components';
import BoardList from './BoardList.js';

const StyledAppContainer = styled.div``

const StyledHeader = styled.div`
  height: 30px;
  padding: 5px 8px;
  background: #026aa7;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
`

const StyledHeaderTitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  color: #fff;
`

class App extends Component {
  render() {
    return (
      <StyledAppContainer>
        <StyledHeader>
          <StyledHeaderTitle>Trollo Boards</StyledHeaderTitle>
        </StyledHeader>
        <BoardList/>
      </StyledAppContainer>
    );
  }
}

export default App;

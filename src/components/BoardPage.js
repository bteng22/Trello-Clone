import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';

const StyledBoardPageContainer = styled.div`
`

class BoardPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <StyledBoardPageContainer>
          BOARD PAGE
        </StyledBoardPageContainer>
      </Fragment>
    )
  }
}

export default BoardPage;
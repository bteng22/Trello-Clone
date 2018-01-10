import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header';
import storage from '../storage';

const StyledBoardPageContainer = styled.div`
`

class BoardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
    this.fetchBoardFromLocalStorage = this.fetchBoardFromLocalStorage.bind(this);
  }

  fetchBoardFromLocalStorage() {
    const boards = storage(localStorage).get('boards');
    if (boards.length) {
      const board = boards.find(({ id }) => id === this.props.id);
      this.setState({
        title: board.title
      });
    }
  }

  componentDidMount() {
    this.fetchBoardFromLocalStorage()
  }

  render() {
    return (
      <Fragment>
        <Header />
        <StyledBoardPageContainer>
          <div>
            <h1>{this.state.title}</h1>
          </div>
          <div>
            BOARD PAGE DETAILS
          </div>
        </StyledBoardPageContainer>
      </Fragment>
    )
  }
}

export default BoardPage;
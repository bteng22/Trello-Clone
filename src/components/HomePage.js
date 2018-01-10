import React, { Component, Fragment } from 'react';
import Header from './Header';
import BoardList from './BoardList';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <BoardList/>
      </Fragment>
    );
  }
}

export default HomePage;

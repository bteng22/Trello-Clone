import React, { Component } from 'react';
import history from '../history';

class Link extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
    Link.handleClick(event);
  }

  static handleClick(event) {
    event.preventDefault();
    history.push(event.currentTarget.getAttribute('href'));
  }

  render() {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...this.props} onClick={this._handleClick} />;
  }
}

export default Link;
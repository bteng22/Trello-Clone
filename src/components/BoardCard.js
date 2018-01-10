import React, { Component } from 'react';
import styled from 'styled-components';
import Link from './Link';

export const StyledBoardListItem = styled.li`
  width: 25%;
  min-height: 100px;
`

const StyledBoardLink = styled(Link)`
  display: flex;
  width: 90%;
  height: 80px;
  background: #026aa7;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  font-weight: 700;
  color: #fff;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #026097;
  }

  > span {
    width: 100%;
    padding: 10px;
  }
`

class BoardCard extends Component {
  render() {
    return (
      <StyledBoardListItem>
        <StyledBoardLink href={`/boards/${this.props.id}`}>
          <span>
            { this.props.title }
          </span>
        </StyledBoardLink>
      </StyledBoardListItem>
    )
  }
}

export default BoardCard;
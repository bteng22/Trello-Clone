import React from 'react';
import HomePage from './components/HomePage';
import BoardPage from './components/BoardPage';

export default [
  { path: '/', action: () => <HomePage /> },
  { path: '/boards/:id', action: () => <BoardPage /> },
];
import React from 'react';
import Row from './Row';

const createGrid = n => {
  const grid = [];
  for (let i = 0; i < n; i++) {
    grid.push(<Row rows={n} rowNum={i} />);
  }
  return grid;
};

const Grid = ({rows}) => (
  // generate rows
  <div className="grid">
    {createGrid(rows)}
  </div>
);

export default Grid;

import React from 'react';
import Box from './Box';

const createRow = (n, rowNum) => {
  let id = n * rowNum;
  let row = [];
  for (let i = 0; i < n; i++, id++) {
    row.push(<Box id={id} />);
  }
  return row;
};

const Row = ({rows, rowNum}) => (
  <div className="row">
    {createRow(rows, rowNum)}
  </div>
);

export default Row;

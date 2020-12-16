import React from "react";

const Filter = ({ onFilter }) => {
  return (
    <div>
      filter shown with
      <input onChange={(event) => onFilter(event.target.value)} />
    </div>
  );
};

export default Filter;

import React from 'react';
import './SortTodos.css';

function SortTodos({ sortByName, sortByRecency }) {
  return(
    <div id="SortBy">
      Sort By: &nbsp;
      <button id="sortByName" onClick={sortByName}>Name</button>&nbsp;
      <button id="sortByDate" onClick={sortByRecency}>Recency</button>
    </div>
  )
}

SortTodos.propTypes = {
  sortByName: React.PropTypes.func.isRequired,
  sortByRecency: React.PropTypes.func.isRequired
};

export default SortTodos;

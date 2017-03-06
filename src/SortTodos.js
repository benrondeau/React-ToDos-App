import React from 'react';
import './SortTodos.css';

function SortTodos({ sortByName, sortByRecency, selectedBTN }) {
  return(
    <div id="SortBy">
      Sort By: &nbsp;
      <button id="sortByName" onClick={sortByName} className={selectedBTN.name ? "SelectedBTN" :""}>Name</button>&nbsp;
      <button id="sortByDate" onClick={sortByRecency} className={selectedBTN.recency ? "SelectedBTN" :""}>Recency</button>
    </div>
  )
}

SortTodos.propTypes = {
  sortByName: React.PropTypes.func.isRequired,
  sortByRecency: React.PropTypes.func.isRequired,
  selectedBTN: React.PropTypes.object.isRequired
};

export default SortTodos;

import React from 'react';
import './TodoListAddItem.css';

function TodoListAddItem({ }) {
  // return(
  //   <form onSubmit={handleSubmit}>
  //     <input type="text" value={value} onChange={handleChange} placeholder="Add New Item..."/>
  //     <input type="submit" value="Submit" />
  //   </form>
  // )
}

TodoListAddItem.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default TodoListAddItem;

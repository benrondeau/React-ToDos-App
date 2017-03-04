import React from 'react';
import './TodoListItem.css';

function TodoListItem({ checked, content, onChange }) {
  return (
    <div className="TodoListItem">
      <label className={checked ? 'TodoListItem-checked' : ''}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {content}
      </label>
    </div>
  );
}

TodoListItem.propTypes = {
  checked: React.PropTypes.bool.isRequired,
  content: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default TodoListItem;

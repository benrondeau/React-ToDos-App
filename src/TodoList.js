import React, { Component } from 'react';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: props.initialTodos
    }
  }

  handleCheck(id, checked) {
    this.setState((previousState) => {
      previousState.todos.find(todo => todo.id === id).checked = checked
      return previousState;
    });
  }

  renderTodoListItems() {
    return this.state.todos.map((todo, index) => {
      return (
        <TodoListItem
          key={index}
          onChange={(e) => this.handleCheck(index, e.target.checked)}
          {...todo}
        />
      );
    });
  }

  render() {
    return (
      <div className="TodoList">
        {this.renderTodoListItems()}
      </div>
    );
  }
}

TodoList.propTypes = {
  initialTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    checked: React.PropTypes.bool,
    content: React.PropTypes.string
  })).isRequired
};

export default TodoList;

import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TodoListAddItem from './TodoListAddItem';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: props.initialTodos
    }
  }

  handleCheck(id, checked) {
    this.setState((previousState) => {
      previousState.todos.find( todo => todo.id === `id${id.toString()}`).checked = checked
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

  addTodoItem(value){
    let newToDo = {
      "id": `id${this.state.todos.length}`,
      "checked": false,
      "content": value,
      "created_at": Date.now()
    }
    this.setState({todos: this.state.todos.concat([newToDo])});
  }

  render() {
    return (
      <div className="TodoList">
        {this.renderTodoListItems()}
        <TodoListAddItem addTodoItem={this.addTodoItem.bind(this)}/>
      </div>
    );
  }
}

TodoList.propTypes = {
  initialTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string,
    checked: React.PropTypes.bool,
    content: React.PropTypes.string,
    created_at: React.PropTypes.number
  })).isRequired
};

export default TodoList;

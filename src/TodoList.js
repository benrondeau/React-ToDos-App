import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TodoListAddItem from './TodoListAddItem';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: props.initialTodos,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  // ADDING ITEMS CODE
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const newToDo = {
      "id": `id${this.state.todos.length}`,
      "checked": false,
      "content": this.state.value,
      "created_at": Date.now()
    }
    this.setState({todos: this.state.todos.concat([newToDo]), value: ''});
  }

  renderAddToDoItem(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add New Item..."/>
        <input type="submit" value="Submit" />
      </form>
    )
  }

  render() {
    return (
      <div className="TodoList">
        {this.renderTodoListItems()}
        {this.renderAddToDoItem()}
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

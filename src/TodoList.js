import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TodoListAddItem from './TodoListAddItem';
import SortTodos from './SortTodos';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: props.initialTodos,
      sortedByName: false,
      sortedByRecency: false
    }
  }

  handleCheck(id, checked) {
    this.setState((previousState) => {
      previousState.todos.find( todo => todo.id === id).checked = checked
      return previousState;
    });
  }

  renderTodoListItems() {
    return this.state.todos.map((todo) => {
      return (
        <TodoListItem
          key={todo.id}
          onChange={(e) => this.handleCheck(todo.id, e.target.checked)}
          {...todo}
        />
      );
    });
  }

  addTodoItem(value){
    let currentTodos = this.state.todos.slice(); // for immutability
    currentTodos.push({
      "id": `id${this.state.todos.length}`,
      "checked": false,
      "content": value,
      "created_at": Date.now()
    });
    this.setState({todos: currentTodos});
  }

  sortByName(){
    // A -> Z sort
    if(!this.state.sortedByName){
      let sortedArray = this.state.todos.sort( (a, b)  => {
        //Remove whitespace and uppercase characters for more accurate comparison, albeit not perfect.
        let tempA = a.content.replace(/\s+/g, '').toLowerCase();
        let tempB = b.content.replace(/\s+/g, '').toLowerCase();
        if (tempA < tempB) return -1;
        else if (tempA > tempB) return 1;
        return 0;
      });
      this.setState({todos: sortedArray, sortedByName:true});
    }
    // Z -> A sort
    else{
      let sortedArray = this.state.todos.sort( (a, b)  => {
        let tempA = a.content.replace(/\s+/g, '').toLowerCase();
        let tempB = b.content.replace(/\s+/g, '').toLowerCase();
        if (tempA > tempB) return -1;
        else if (tempA < tempB) return 1;
        return 0;
      });
      this.setState({todos: sortedArray, sortedByName:false});
    }
  }

  sortByRecency(){
    // 0 -> 9 sort
    if(!this.state.sortedByRecency){
      let sortedArray = this.state.todos.sort( (a, b)  => {
        return a.created_at - b.created_at;
      });
      this.setState({todos: sortedArray, sortedByRecency:true});
    }
    // 9 -> 0 sort
    else{
      let sortedArray = this.state.todos.sort( (a, b)  => {
        return b.created_at - a.created_at;
      });
      this.setState({todos: sortedArray, sortedByRecency:false});
    }
  }

  render() {
    return (
      <div>
        <SortTodos sortByName={this.sortByName.bind(this)} sortByRecency={this.sortByRecency.bind(this)} />
        <div className="TodoList">
          {this.renderTodoListItems()}
          <TodoListAddItem addTodoItem={this.addTodoItem.bind(this)}/>
        </div>
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

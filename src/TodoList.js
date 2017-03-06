import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TodoListAddItem from './TodoListAddItem';
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
        //Remove whitespace and uppercase characters for more accurate comparison, albeit not perfect.
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
        <div id="SortBy">
          Sort By: &nbsp;
          <button id="sortByName" onClick={this.sortByName.bind(this)}>Name</button>&nbsp;
          <button id="sortByDate" onClick={this.sortByRecency.bind(this)}>Recency</button>
        </div>
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

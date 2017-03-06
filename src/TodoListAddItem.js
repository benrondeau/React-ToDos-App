import React from 'react';
import './TodoListAddItem.css';

class TodoListAddItem extends React.Component{

  constructor(props){
    super();
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // Basic form validation, preventing empty field submission
    if(this.state.value === ''){
      alert("Cannot save an empty Todo! Please add some text for your Todo.");
    }
    else{
      this.props.addTodoItem(this.state.value);
      this.setState({value: ''}); // Clears out form field
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add New Todo..."/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

TodoListAddItem.propTypes = {
  addTodoItem: React.PropTypes.func.isRequired
};

export default TodoListAddItem;

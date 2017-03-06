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
    this.props.addTodoItem(this.state.value);
    this.setState({value: ''}); // Clear out form field
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Add New Item..."/>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

// THIS IS ERRORING OUT. FIX THIS LATER
// TodoListAddItem.propTypes = {
//   value: React.PropTypes.string.isRequired,
//   onChange: React.PropTypes.func.isRequired,
//   onSubmit: React.PropTypes.func.isRequired
// };

export default TodoListAddItem;

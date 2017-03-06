import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import seededTodos from './todos.json';

describe('<TodoList /> component', () => {

  const wrapper = shallow(<TodoList initialTodos={seededTodos} />);

  it('renders a TodoListItem for each todo', () => {
    expect(wrapper.find('TodoListItem').length).toEqual(5);
  });

  it('updates the todos state with handleCheck()', () => {
    wrapper.instance().handleCheck('id0', false);
    expect(wrapper.instance().state.todos[0].checked).toEqual(false);
  });

// New tests
  it('renders <TodoList /> without crashing', () => {
    shallow(<TodoList initialTodos={seededTodos} />);
  });

  it('renders <SortTodos /> component', () => {
    expect(wrapper.find('SortTodos').length).toEqual(1);
  });

  it('adds a new Todo item to the list', ()=>{
    wrapper.instance().addTodoItem('Testing123');
    expect(wrapper.instance().state.todos.length).toEqual(6);
  });
  
  it('filter by name A -> Z', () => {
    wrapper.instance().sortByName();
    expect(wrapper.instance().state.todos[0]["content"]).toEqual("Assemble fleet");
  });

  it('filter by name Z -> A', () => {
    wrapper.instance().sortByName();
    expect(wrapper.instance().state.todos[0]["content"]).toEqual("Testing123");
  });

  it('filter by recency DESCENDING time stamp', () => {
    wrapper.instance().sortByRecency();
    expect(wrapper.instance().state.todos[0]["content"]).toEqual("Distract tie fighters");
  });

  it('filter by recency ASCENDING time stamp', () => {
    wrapper.instance().sortByRecency();
    expect(wrapper.instance().state.todos[0]["content"]).toEqual("Testing123");
  });

});

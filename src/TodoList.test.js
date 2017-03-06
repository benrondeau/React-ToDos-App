import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './TodoList';
import seededTodos from './todos.json';

describe('TodoList tests', () => {

  // // New test.
  it('renders <TodoList /> without crashing', () => {
    shallow(<TodoList initialTodos={seededTodos} />);
  });

  it('renders a TodoListItem for each todo', () => {
    const wrapper = shallow(<TodoList initialTodos={seededTodos} />);
    expect(wrapper.find('TodoListItem').length).toEqual(5);
  });

  it('updates the todos state with handleCheck()', () => {
    const wrapper = shallow(<TodoList initialTodos={seededTodos} />);
    wrapper.instance().handleCheck('id0', false);
    expect(wrapper.instance().state.todos[0].checked).toEqual(false);
  });

});

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import seededTodos from './todos.json';

describe('App tests', () => {

  // New test.
  it('renders <App /> without crashing', () => {
    shallow(<App />);
  });

  it('renders the header text', () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find('h2');
    expect(header.prop('children')).toEqual('Todo List App');
  });

  it('renders the TodoList with the seeded todos', () => {
    const wrapper = shallow(<App />);
    const todoList = wrapper.find('TodoList');
    expect(todoList.prop('initialTodos')).toEqual(seededTodos);
  });
});

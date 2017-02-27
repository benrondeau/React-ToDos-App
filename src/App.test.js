import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import seededTodos from './todos.json';

it('renders the header', () => {
  const wrapper = shallow(<App />);
  const header = wrapper.find('h2');
  expect(header.prop('children')).toEqual('Todo list app');
});

it('renders the TodoList with the seeded todos', () => {
  const wrapper = shallow(<App />);
  const todoList = wrapper.find('TodoList');
  expect(todoList.prop('initialTodos')).toEqual(seededTodos);
});

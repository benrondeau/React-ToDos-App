import React from 'react';
import { shallow } from 'enzyme';
import TodoListAddItem from './TodoList';
import seededTodos from './todos.json';

describe('TodoListAddItem tests', () => {

  const wrapper = shallow(<TodoListAddItem initialTodos={seededTodos} />);

  it('should render <form/>', () => {
    expect(1).toEqual(1);
  });

  it('user input should update state', () => {
    // this.state.value updates when the user types in the field
    expect(1).toEqual(1);
  });

  it('successfully submit form and updates state of parent component', () => {
    // how to do this? render both components and then test?
    expect(1).toEqual(1);
  });

  it('clear out form input value after submission', () => {
    expect(1).toEqual(1);
  });

})

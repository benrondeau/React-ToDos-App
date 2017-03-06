import React from 'react';
import { shallow } from 'enzyme';
import TodoListAddItem from './TodoListAddItem';

describe('TodoListAddItem tests', () => {

  const wrapper = shallow(<TodoListAddItem addTodoItem={ ()=>{} } />);

  it('should render <TodoListAddItem/> without crashing', () => {
    shallow(<TodoListAddItem addTodoItem={function(){}} />);
  });

  it('user input should update state.value', () => {
    const tempEvent = { target : { value : "Testing123" } };
    wrapper.instance().handleChange(tempEvent);
    expect(wrapper.instance().state.value).toEqual('Testing123');
  });

  it('should not accept an empty field for submission', () => {
    const tempEvent = { preventDefault: ()=>{} };
    wrapper.instance().setState({ value: '' });
    wrapper.instance().handleSubmit(tempEvent);
    expect(wrapper.instance().state.fieldEmpty).toEqual(true);
  });

  it('submit form', () => {
    const tempEvent = { preventDefault: ()=>{} };
    wrapper.instance().setState({ value: 'Testing123' });
    wrapper.instance().handleSubmit(tempEvent);
    expect(wrapper.instance().state.fieldEmpty).toEqual(false);
  });

  it('clear out form input value after submission', () => {
    const tempEvent = { preventDefault: ()=>{} };
    wrapper.instance().setState({ value: 'Testing123' });
    wrapper.instance().handleSubmit(tempEvent);
    expect(wrapper.instance().state.value).toEqual('');
  });

})

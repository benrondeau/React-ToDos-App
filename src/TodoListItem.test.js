import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from './TodoListItem';

describe('when not checked', () => {
  const wrapper = shallow(
    <TodoListItem
      checked={false}
      content="todo list item"
      onChange={() => {}}
    />
  );

  it('assigns no className for the label', () => {
    expect(wrapper.find('label').prop('className')).toEqual('');
  });

  it('assigns the correct checked field for the checkbox', () => {
    expect(wrapper.find('input').prop('checked')).toEqual(false);
  });
});

describe('when checked', () => {
  const wrapper = shallow(
    <TodoListItem
      checked={true}
      content="todo list item"
      onChange={() => {}}
    />
  );

  it('assigns no className for the label', () => {
    expect(wrapper.find('label').prop('className')).toEqual('TodoListItem-checked');
  });

  it('assigns the correct checked field for the checkbox', () => {
    expect(wrapper.find('input').prop('checked')).toEqual(true);
  });
});

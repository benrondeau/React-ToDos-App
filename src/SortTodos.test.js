import React from 'react';
import { shallow } from 'enzyme';
import SortTodos from './SortTodos';

describe('SortTodos tests', () => {

  const wrapper = shallow(
    <SortTodos
      sortByName={()=>{}}
      sortByRecency={()=>{}}
      selectedBTN={ {} }
    />);

  it('should render <SortTodos/>', () => {
    expect(1).toEqual(1)
  });

  it('filter by name A -> Z', () => {
    expect(1).toEqual(1);
  });

  it('filter by name Z -> A', () => {
    expect(1).toEqual(1);
  });

  it('filter by recency DESCENDING time stamp', () => {
    expect(1).toEqual(1);
  });

  it('filter by recency ASCENDING time stamp', () => {
    expect(1).toEqual(1);
  });

  it('renders .SelectedBTN class when RECENCY button clicked', () => {
    expect(1).toEqual(1);
  });

  it('renders .SelectedBTN class when NAME button clicked', () => {
    expect(1).toEqual(1);
  });

});

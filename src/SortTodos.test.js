import React from 'react';
import { shallow, render } from 'enzyme';
import SortTodos from './SortTodos';

describe('name', () => {
  
  const wrapper = shallow(
    <SortTodos
      sortByName={()=> {}}
      sortByRecency={()=>{}}
      selectedBTN={{}}
    />
  );

  it('renders .SelectedBTN class when name button clicked', () => {
    wrapper.setProps({selectedBTN: {name:true, recency:false}});
    expect(wrapper.find('#sortByName').prop('className')).toEqual('SelectedBTN');
 });

});

describe('recency', () => {
  
  const wrapper = shallow(
    <SortTodos
      sortByName={()=> {}}
      sortByRecency={()=>{}}
      selectedBTN={{}}
    />
  );

  it('renders .SelectedBTN class when name button clicked', () => {
    wrapper.setProps({selectedBTN: {name:false, recency:true}});
    expect(wrapper.find('#sortByDate').prop('className')).toEqual('SelectedBTN');
 });

});
import React from 'react';
import { shallow, render } from 'enzyme';
import SortTodos from './SortTodos';

describe('<SortTodos />', () => {
  
  const wrapper = shallow(
    <SortTodos
      sortByName={()=> {}}
      sortByRecency={()=>{}}
      selectedBTN={{}}
    />
  );

  it('renders <SortTodos/>', () => {
    shallow(<SortTodos sortByName={()=> {}} sortByRecency={()=>{}} selectedBTN={{}} />);
  });

  it('renders .SelectedBTN class when name button clicked', () => {
    wrapper.setProps({selectedBTN: {name:true, recency:false}});
    expect(wrapper.find('#sortByName').prop('className')).toEqual('SelectedBTN');
 });

  it('renders .SelectedBTN class when name button clicked', () => {
    wrapper.setProps({selectedBTN: {name:false, recency:true}});
    expect(wrapper.find('#sortByDate').prop('className')).toEqual('SelectedBTN');
 });

});
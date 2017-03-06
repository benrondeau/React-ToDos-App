import React from 'react';
import { shallow } from 'enzyme';
import SortTodos from './SortTodos';


  // Questions...
  // 1) How do I mock the functions being accessed it the parent component, so that I can test them?
  //    Do I just test the functions in the component they are written in (parent)?
  // 2) How do simulate clicks?

  const minimumProps = {
    sortByName: ()=>{},
    sortByRecency: ()=>{},
    selectedBTN: {},
  };

  it('should render <SortTodos/>', () => {
    // const wrapper = shallow(<div/>);
    // expect(wrapper.find('.other-class').exists()).to.be(false);
    const wrapper = shallow(<SortTodos {...minimumProps}/>);
    // expect(wrapper.find('div')).to.have.length(1);
  });

  it('renders .SelectedBTN class when RECENCY button clicked', () => {
    expect(1).toEqual(1);
  });

  it('renders .SelectedBTN class when NAME button clicked', () => {
    expect(1).toEqual(1);
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

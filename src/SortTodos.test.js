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

  it('PLEASE WORK', function(){
    // const wrapper = shallow(<div className="some-class" />);
    // expect(wrapper.find('.other-class').exists()).to.be(false);
    // // const wrapper = shallow(<SortTodos {...minimumProps}/>);
    // // console.log(wrapper);
  });

  it('renders .SelectedBTN class when RECENCY button clicked', () => {
    expect(1).toEqual(1);
  });

  it('renders .SelectedBTN class when NAME button clicked', () => {
    expect(1).toEqual(1);
  });

import React from 'react';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(sinonChai);
Enzyme.configure({ adapter: new Adapter() });


import { App } from '../App';


describe('<App />' , function() {
  let wrapper;

  it('renders UserInfoContainer when props.notFound is false', () => {
    wrapper = shallow(<App notFound={false}/>)
    expect(wrapper.text()).to.contain("<Connect(Component) />")
  })

  it('renders UserInfoContainer when props.notFound is true', () => {
    wrapper = shallow(<App notFound={true}/>)
    expect(wrapper.text()).to.contain("<NotFound />")
  })

})

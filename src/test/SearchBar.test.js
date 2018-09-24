import React from 'react';
import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(sinonChai);
Enzyme.configure({ adapter: new Adapter() });


import { SearchBar } from '../components/SearchBar';


describe('<SearchBar />' , function() {
  let wrapper;

  beforeEach( () => { wrapper = shallow(<SearchBar />) })

  it('includes 1 form', () => {
    expect(wrapper.find('form')).to.have.lengthOf(1)
  })

  it('includes 1 text input', () => {
    expect(wrapper.find('input.text-input')).to.have.lengthOf(1)
  })

  it('includes 1 submit button', () => {
    expect(wrapper.find('input.submit-input')).to.have.lengthOf(1)
  })

})

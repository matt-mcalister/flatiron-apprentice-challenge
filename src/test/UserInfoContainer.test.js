import React from 'react';
import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

chai.use(sinonChai);
Enzyme.configure({ adapter: new Adapter() });


import { UserInfoContainer } from '../components/UserInfoContainer';


describe('<UserInfoContainer />' , function() {
  let wrapper;
  const userObj = {
    "login": "octocat",
    "avatar_url": "https://github.com/images/error/octocat_happy.gif",
    "html_url": "https://github.com/octocat",
    "name": "monalisa octocat",
    "company": "GitHub",
    "location": "San Francisco",
    "email": "octocat@github.com",
    "bio": "There once was...",
    "public_repos": 2,
    "public_gists": 1,
    "followers": 20,
    "following": 0,
    "created_at": "2008-01-14T04:33:35Z",
  }

  beforeEach( () => { wrapper = shallow(<UserInfoContainer userObj={userObj}/>) })

  it('includes an img element that uses the userObjs avatar_url', () => {
    expect(wrapper.find('img').filterWhere((item) => {
        return item.prop('src') === userObj.avatar_url;
      })).to.have.lengthOf(1);
  })

  it('includes the users name in an h1', () => {
    expect(wrapper.find('h1').text()).to.contain(userObj.name)
  })

  it('includes the users username as an anchor element that links to the users profile', () => {
    expect(wrapper.find(`a[href="${userObj.html_url}"]`)).to.have.lengthOf(1)
    expect(wrapper.find(`a[href="${userObj.html_url}"]`).text()).to.contain(userObj.login)
  })

  it('includes the date joined in the format MM/DD/YYYY', () => {
    expect(wrapper.text()).to.contain('1/13/2008')
  })

  it('includes the location, company and bio of the user', () => {
    expect(wrapper.text()).to.contain(userObj.location)
    expect(wrapper.text()).to.contain(userObj.company)
    expect(wrapper.text()).to.contain(userObj.bio)
  })

})

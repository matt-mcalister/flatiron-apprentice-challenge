import React from 'react';
import { connect } from 'react-redux'
import SearchBar from "./components/SearchBar"
import UserInfoContainer from "./components/UserInfoContainer"

const App = (props) => {
  return (
    <div id="App">
      <SearchBar />
      <UserInfoContainer />
    </div>
  );
}

export default connect(state => ({...state}))(App);

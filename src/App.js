import React from 'react';
import { connect } from 'react-redux'
import SearchBar from "./SearchBar"

const App = (props) => {
  console.log(props);
  return (
    <div id="App">
      <SearchBar />
    </div>
  );
}

export default connect(state => ({...state}))(App);

import React from 'react';
import { connect } from 'react-redux'
import SearchBar from "./components/SearchBar"
import UserInfoContainer from "./components/UserInfoContainer"
import NotFound from "./components/NotFound"

export const App = (props) => {
  return (
    <div id="App">
      <SearchBar />
      { props.notFound
        ?
        <NotFound />
        :
        <UserInfoContainer />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notFound: !!state.search.userObj && !!state.search.userObj.message,
  }
}

export default connect(mapStateToProps)(App);

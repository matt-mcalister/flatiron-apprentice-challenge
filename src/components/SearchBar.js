import React from "react";
import { connect } from "react-redux";
import { setUsername, resetState } from "../actions"

const defaultState = {
  username: "",
}

export class SearchBar extends React.Component {
  state = defaultState

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setUsername(this.state.username)
    this.resetTextInput()
  }

  handleChange = (e) => {
    const username = e.target.value
    this.setState(prevState => {
      return {
        username,
      }
    })
  }

  resetTextInput = () => {
    this.setState(prevState => {
      return defaultState
    })
  }

  handleClick = (e) => {
    this.props.resetState()
    this.resetTextInput()
  }

  render() {
    return (
      <div id="search-bar">
        <div id="octocat" className="centered-img-container">
          <img src="/images/Octocat.jpg" alt="Octocat" />
        </div>
        <h4>Enter a GitHub username:</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="text-input" value={this.state.username} onChange={this.handleChange} />
          <input type="submit" className="submit-input" value="Search" />
          <button type="button" onClick={this.handleClick}>Clear</button>
        </form>
      </div>
    )
  }
}
export default connect(null, { setUsername, resetState })(SearchBar)

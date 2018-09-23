import React from "react";

class SearchBar extends React.Component {
  state = {
    username: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    const username = e.target.value
    this.setState(prevState => {
      return {
        username
      }
    })
  }

  render() {
    return (
      <div id="search-bar">
        <div id="octocat" className="centered-img-container">
          <img src="/images/Octocat.jpg" alt="Octocat" />
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleChange} />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}
export default SearchBar

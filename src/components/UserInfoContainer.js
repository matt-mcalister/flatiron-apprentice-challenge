import React from "react"
import { connect } from "react-redux"
import StatIcon from './StatIcon'

export const UserInfoContainer = ({ resetState, userObj: { created_at, avatar_url, name, html_url, login, bio, location, company, public_repos, public_gists, followers, following } }) => {
  return (
    <div id='user-info-container' className="main-body">
        <div id="user-img" className="centered-img-container">
          <img src={avatar_url} alt={name} />
        </div>
        <div id="basic-info">
          <h1>{name}</h1>
          <a href={html_url}>{login}</a>
          {created_at && <p>Joined {new Date(created_at).toLocaleDateString('en-US')}</p>}
          <p>{location}</p>
          <p>{company}</p>
          <p>{bio}</p>
        </div>
      <div id="user-stats">
        {!!public_repos && <StatIcon type="Public Repos" num={public_repos} color="red"/>}
        {!!public_gists && <StatIcon type="Public Gists" num={public_gists} color="green"/>}
        {!!followers && <StatIcon type="Followers" num={followers} color="orange"/>}
        {!!following && <StatIcon type="Following" num={following} color="purple"/>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const userObj = state.search.userObj || {
    avatar_url: "",
    name: "",
    html_url: "",
    login: "",
    bio: "",
    company: "",
    location: "",
    created_at: null,
  }
  return {
    userObj,
  }
}

export default connect(mapStateToProps)(UserInfoContainer)

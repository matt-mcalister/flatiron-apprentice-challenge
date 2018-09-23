import React from "react"

const NotFound = (props) => {
  return (
    <div id="not-found">
      <div id="unicorn" className="centered-img-container">
        <img src="/images/not-found.png" alt="Not Found" />
      </div>
      <p>Oh no! Something went wrong.</p>
    </div>
  )
}

export default NotFound

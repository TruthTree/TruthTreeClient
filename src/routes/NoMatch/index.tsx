// @flow
import React, { Component } from "react"
import { Link } from "react-router-dom"

class NoMatch extends Component<{}> {
  render() {
    return (
      <div className="App">
        <h1>404</h1>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    )
  }
}

export default NoMatch

import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, IndexLink, hashHistory, browserHistory } from 'react-router'
import NavLink from './NavLink'

var App = React.createClass({
  render() {
    return (
      <div>
        <h1> React router tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

export default App

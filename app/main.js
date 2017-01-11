//main here is index.js there
import React from 'react'
import {render} from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import About from './About'
import Repos from './Repos'
import Repo from './Repo'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="/repos" component={Repos}>
        <Route path="/repos/:userName/:repoName" component={Repo}/>
      </Route>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))

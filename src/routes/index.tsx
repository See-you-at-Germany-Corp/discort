import React from 'react'
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from 'react-router-dom'

import Home from 'pages/home'
import SideNavbar from 'layouts/side-navbar'

export default function Routes() {
  return (
    <Router>
      <SideNavbar />
      <Switch>
        <Route path="/" element={<Home />} />
      </Switch>
    </Router>
  )
}

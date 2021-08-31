import React from 'react'
import {Navbar} from './components/index'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './page/Homepage/Home.jsx'

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
    </>
  )
}

export default App

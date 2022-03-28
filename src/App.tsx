import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import Login from './pages/login'
import Profile from './pages/profile'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/profile" component={Profile} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
  )
}

export default App

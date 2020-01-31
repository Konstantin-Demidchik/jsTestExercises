import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';


import Header from './components/Header/index.jsx'
import Actors from './components/Actors/index.jsx'
import Main from './components/Main/index.jsx'

const App = () => (
  <BrowserRouter>
    <div>
     <Header />
     <Switch>
       <Route
         exact
         path="/"
         component={Main}
        />
       <Route
         exact
         path="/actors"
         component={Actors}
        />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;

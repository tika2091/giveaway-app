import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Home from '../components/ui/Home'
import About from '../components/ui/About'
import DonateNow from '../components/ui/DonateNow'
import ItemList from '../components/ui/ItemList'
import Electronics from '../components/ui/Electronics'
import SignIn from '../components/ui/SignIn'
import SignUp from '../components/ui/SignUp'
import {Left, Right, Whoops404} from '../components'
import { browserHistory } from 'react-router';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/" component={Left}>
      <Route path="about" component={About}/>
      <Route path="donatenow" component={DonateNow}/>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="item" component={ItemList}/>
      <Route path="electronics" component={Electronics}/>
    </Route>
    <Route path="*" component={Whoops404}/>
  </Router>
);
export default routes;

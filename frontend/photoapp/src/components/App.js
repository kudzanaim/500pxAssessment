// Main Modules:
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {getphotos, getSinglePhoto} from './actions/action';
import {Home} from './home/home'

import {Nav} from './nav/nav'
import './css/App.css';

const App = (props)=>{
    return (
      <div className="App">
          <Nav />
          <Router>                            
              <Switch>
                  <Route exact path="/"  render={ ()=><Home props={props} />}/>
                  <Route exact path="/:filter"  render={ ()=><Home props={props} />}/>
                  <Route exact path="/:filter/photo/:id"  render={ ()=><Home props={props} />}/>
              </Switch>                 
          </Router>
          
      </div>
    )
}


const mapStateToProps = state => ({
    currentFilter: state.currentFilter,
    currentPage: state.currentPage,
    photos: state.photos,
    singlePhoto: state.singlePhoto,
})

const mapActionsToState = dispatch =>({
    getphotos:(filter, page)=>dispatch(getphotos(filter, page)),
    getSinglePhoto:(id)=>dispatch(getSinglePhoto(id)),
})

export default connect( mapStateToProps, mapActionsToState )(App);
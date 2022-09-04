import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;

  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }



  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" /></Route>
            <Route path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

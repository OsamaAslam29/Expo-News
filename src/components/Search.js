import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
export class Search extends Component {

  constructor(){
    super();
    this.state = {
      search: "",
    }
  }


  handleSearchClick=()=>{
    this.props.updateNews(this.state.search)
  } 
     
  render() {
    return (
     
      <div>
       <div className="search-box form-control">
            <input id="search" type="search" onChange={(e)=> this.setState({ search: e.target.value })} name="search" placeholder="Job Title" />
            <button className="btn" onClick={this.handleSearchClick}>Search</button> 
        </div>
      </div> 
    )
  }
}

export default Search

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';

export default class Navbar extends Component {
  

  handleSearchClick=(category)=>{
    this.props.updateNews(category);
  }
 

  render() {
    return (
      <div>
       {/* Hello world */}
      {/*   <div className="awesome" style={{border: '1px solid red'}}>
          <label htmlFor="name">Enter your name: </label>
          <input type="text" id="name" />
        </div>  */}
        <p></p><nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsWeb BY Haider Shan</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link "  to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/business"> Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/entertainment"> Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/general"> General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/health"> Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/science"> Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/sports"> Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/technology"> Technology</Link>
                </li>
                </ul>
               {/*  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" to="#">Action</a></li>
                    <li><a className="dropdown-item" to="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" to="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li> */}
                
              {/*  <NavLink excat </NavLink>   */}
             {/* <form className="d-flex ms-5">
        <input className="form-control ms-5" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={this.handleSearchClick} type="submit">Search</button>
      </form>  */}
              <Search updateNews={this.handleSearchClick}/>
            </div>
          </div>
        </nav><p />
      </div>
    )
  }
}

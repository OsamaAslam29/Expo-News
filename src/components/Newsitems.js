import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date,source } = this.props;
    return (
    
        <div className=" my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'2'}}>
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
          <img
            src={
              !imageurl
                ? "https://www.numerama.com/wp-content/uploads/2021/10/nup-194012-0440.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}...{" "}
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                BY {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-dark"
            >
              Read more
            </a>

          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;

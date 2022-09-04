import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let {title,description,imageUrl,url,author,date,source}=this.props
    return (
      <div className='my-3 text-center px-4'>
        <div className="card">
          <div style={{display:"flex", justifyContent: "flex-end" , position:"absolute" , right:"0"}}>
          <span className="badge rounded-pill bg-danger" style={{left:"90%" , zIndex:'1'}}>{source}</span>

          </div>
          <img src={imageUrl} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className='card-text '><small className='text-danger'>By: {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a href={url} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItems

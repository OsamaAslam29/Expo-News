import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';

export class News extends Component {

   
    componentDidMount(){
      this.props.updateNews(this.props.category);
    }

    componentDidUpdate(preProps, preState){
      if(preProps.category !== this.props.category){
        this.props.updateNews(this.props.category);

      }
    }

  render() {

    return (
      <div className='container my-5'>
        <h1 className="text-center" style={{margin:'60px 0px',margintop:'90px'}}>Top headlines- BY Haider</h1>
        {this.props.loading && <Spinner/>}
        <div className='row '>
          {!this.props.loading && this.props.articles.map((element)=>{
            return  <div className='col-md-4' key={element.url}>
            <Newsitems title={element.title} description={element.description}
            imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        <div/>
      </div>
      <div className='container d-flex justify-content-between'>
      <button disabled={this.props.page<=1} type="button" className="btn btn-dark" onClick={()=>this.props.handlePrevClick(this.props.category)}> &larr; previous</button>
      <button disabled={this.props.page + 1> Math.ceil(this.props.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={()=>this.props.handleNextClick(this.props.category)}>Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News

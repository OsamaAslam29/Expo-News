import React, { Component } from 'react'
import NewItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articals: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - ExpoNews`
  }

  async update() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61b773a814794a36a057164678dc477a&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    this.setState({
      articals: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100);

  }
  async componentDidMount() {
    
    this.update();
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=61b773a814794a36a057164678dc477a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articals: this.state.articals.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })

  };

  render() {

    return (
      <div className='container '>
        <h2 className='text-center' style={{marginTop:"90px"}}> ExpoNews - Top {this.capitalizeFirstLetter(this.props.category)}  Headlines </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articals.length}
          next={this.fetchMoreData}
          hasMore={this.state.articals.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={<Spinner/>}>
            <div className="container">
          <div className="row ">
            {this.state.articals.map((element) => {
              return <div className="col-md-4 " key={element.url}>
                <NewItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://www.cartoq.com/wp-content/uploads/2022/06/mahindra-scorpio-most-advanced.jpg"}
                  url={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}

                />
              </div>
            })}

          </div>
          </div>
        </InfiniteScroll>

        

      </div>

    )
  }
}

export default News

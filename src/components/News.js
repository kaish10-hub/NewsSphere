import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles:[],
      loading: false
    }
  }

  async componentDidMount (){
    let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=16986fe5f7cb4937b67976585cb5af99"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <div className='containner my-3'>
        <h2>NewsSphere - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>
          })}
        </div>
      </div>
    )
  }
}

export default News

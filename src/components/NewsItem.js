import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,date,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:'90%',zIndex:'1'}}>{source}</span>
          <img
            src={imageUrl?imageUrl:"https://images.unsplash.com/photo-1504711434969-e33886168f5c"}
            alt="news"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-primary btn-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

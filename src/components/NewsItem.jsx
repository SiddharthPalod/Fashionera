import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description } = this.props; // Declare variables using 'const'

    return (
      <div>
        <div className='card' style={{ width: "18rem" }}> {/* Use double curly braces for inline style */}
          <img src='...' className='card-img-top' alt='News' /> {/* Add 'alt' attribute for accessibility */}
          <div className='card-body'>
            <h6 className='card-text'>{title}</h6> {/* Use curly braces to render variables */}
            <p className='card-text'>{description}</p> {/* Use curly braces to render variables */}
            <a href="#" className='btn btn-primary'>Go</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;

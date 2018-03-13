import React, { Component } from 'react';
import './Preview.css';

class Preview extends Component {
//   constructor() {
//     super();
//     console.log();
//   }
  render() {
    return (
      <div id="preview" className="effect1">
        {/* <h1>This is what you will be sharing</h1> */}
        <div className="media">
          <img
            className="align-self-start mr-3 site-preview"
            src={this.props.img}
            alt="Preview of {this.props.url}"
          />
          <div className="media-body">
            <h5 className="mt-0 site-title">{this.props.title}</h5>
            <p className="site_info">{this.props.description}</p>
            <p>URL: <span className="site-url">{this.props.url}</span></p>
          </div>
        </div>
      </div>
    );
  }
}


export default Preview;

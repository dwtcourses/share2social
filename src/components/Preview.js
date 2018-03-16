import React, { Component } from 'react';
import './Preview.css';

class Preview extends Component {
  // constructor() {
  //   super();
  // }

  componentWillMount(){
    // const state=Object.apply(this.props);
    // this.setState(state);
    // console.log('This state in preview is', state);
  }

  handleTitleClick(e){
    // console.log('Title Clicked', e);
    this.props.editTitle=true;
  }

  render() {
    return (
      <div id="preview" className="effect1">
        {/* <h1>This is what you will be sharing</h1> */}
        <div className="media">
          <img
            className="align-self-start mr-3 site-preview"
            src={this.props.image}
            alt="Preview of {this.props.url}"
          />
          <div className="media-body">
            <h5 className="mt-0 site-title">
              <div onClick={this.handleTitleClick.bind(this)} contentEditable={this.props.editTitle}>
                {this.props.title}
              </div>
            </h5>
            <p className="site_info">{this.props.description}</p>
            <p>
              URL: <span className="site-url">{this.props.url}</span>
            </p>
            {/* <p>Image: <span className="site-url">{this.props.image}</span></p> */}
          </div>
        </div>
      </div>
    );
  }
}


export default Preview;

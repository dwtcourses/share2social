import React, { Component } from 'react';
import './Preview.css';
import img_notfound from '../images/no-image.png';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      url: props.url,
      description: props.description,
      image: props.image
    };
  }

  componentWillReceiveProps(props) {
    let state = {
      title: props.title,
      url: props.url,
      description: props.description,
      image: props.image
    };
    this.setState(state);
  }

  componentDidMount(){
    // console.log('------>component DID mount');
  }

  handleTitleChange(e){
    this.setState({ title: e.target.innerHTML }, function stateUpdateComplete() {
        this.props.contentChangedEvent(this.state);
      }.bind(this));
  }

  handleDescriptionChange(e){
    this.setState({ description: e.target.innerHTML }, function stateUpdateComplete() {
        this.props.contentChangedEvent(this.state);
      }.bind(this));
  }

  // handleUrlChange(e){
  //   this.setState({ url: e.target.innerHTML }, function stateUpdateComplete() {
  //       this.props.contentChangedEvent(this.state);
  //     }.bind(this));
  // }

  handleImageChange(e){
    console.log('todo: Image changes');
    // this.setState({ image: e.target.value });
  }

  handleError(e) {
    this.setState({
      image: img_notfound
    });
  }

  render() {
    return <div id="preview" className="effect1">
        {/* <h1>This is what you will be sharing</h1> */}
        <div className="media">
          <img className="align-self-start mr-3 site-preview" src={this.state.image} alt="Website  preview" onError={this.handleError.bind(this)} />
          <div className="media-body">
            <h5 className="mt-0 site-title">
              <div className="editable" contentEditable suppressContentEditableWarning onBlur={this.handleTitleChange.bind(this)} title="Click here to edit the title before sharing">
                {this.state.title}
              </div>
            </h5>
            <div className="site_info editable" contentEditable suppressContentEditableWarning onBlur={this.handleDescriptionChange.bind(this)} title="Click here to edit the description before sharing">
              {this.state.description}
            </div>
            <p className="site-url-label">
              URL: <span className="site-url">
                {this.state.url}
              </span>
            </p>
            {/* <p>
              Image: <span className="site-url">{this.state.image}</span>
            </p> */}
          </div>
        </div>
        <div className="alert alert-info info-alert" role="alert">
          Tip: Click on the title and description to edit it. Scroll down to see how you can use this free tool for your README.md file or web page.
        </div>
      </div>;
  }
}


export default Preview;

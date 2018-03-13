import React, { Component } from 'react';
import './App.css';
import Preview from './components/Preview';
import ShareButtons from './components/ShareButtons';
import UseIt from './components/UseIt';
import About from './components/About';

class App extends Component {

  constructor(){
    super();
    this.state = {
      url: 'http://google.com',
      title: 'this is a title',
      img: 'https://www.drupal.org/files/images/pagepreview_screenshot_0.png',
      description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    };
  }

  render() {
    return <main role="main" className="container">
        {/* <div className="header">You are sharing: {this.state.url}</div> */}
        <div id="shareaction" className="effect5">
          <Preview url={this.state.url} title={this.state.title} img={this.state.img} description={this.state.description} />
          <ShareButtons />
        </div>
        <UseIt />
        <About />
      </main>;
  }
}

export default App;

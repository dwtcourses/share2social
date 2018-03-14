import React, { Component } from 'react';
import './App.css';
import Preview from './components/Preview';
import ShareButtons from './components/ShareButtons';
import UseIt from './components/UseIt';
import About from './components/About';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://google.com',
      title: 'this is a title',
      img: 'https://www.drupal.org/files/images/pagepreview_screenshot_0.png',
      description:
        'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    };
  }

  getParameterByName(name, url) {
    name = name.replace(/[[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  fetchExternalHTML(url) {
    /*
    <meta property="og:url" content="https://github.com">
    <meta property="og:site_name" content="GitHub">
    <meta property="og:title" content="Build software better, together">
    <meta property="og:description" content="GitHub is where people build software. More than 27 million people use GitHub to discover, fork, and contribute to over 80 million projects.">
    <meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-logo.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="1200">
    <meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-mark.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="620">
    <meta property="og:image" content="https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="620">
    */

    let website_object = {url: url};
    const new_url = 'https://cors-anywhere.herokuapp.com/' + url;
    axios
      .get(new_url)
      .then(response => {
        const data = response.data;
        console.log(data);
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const titles = htmlDoc.getElementsByTagName('title'); 
        website_object.title = titles[0].innerHTML;
        console.log('website_object is ', website_object);

        var meta_tags = document.getElementsByTagName('meta');
        console.log(meta_tags);

      })
      .catch(error => {
        // This is where you run code if the server returns any errors
        console.log('Got fetch error ', error);
      });
  }

  // fetchExternalHTML(url) {
  //   fetch(url, { mode: 'no-cors' }) // Call the fetch function passing the url of the API as a parameter
  //     .then(function(result) {
  //       // Your code for handling the data you get from the API
  //       console.log('Loaded page ', result);
  //     })
  //     .catch(function(error) {
  //       // This is where you run code if the server returns any errors
  //       console.log('Got fetch error ', error);
  //     });
  // }

  componentWillMount() {
    const ref_url = document.referrer;
    const my_url = window.location.href;
    console.log('Ref URL is ', ref_url);
    // console.log('My URL is ', my_url);
    const url_in_param = this.getParameterByName('url', my_url);
    // console.log('URL in param is ', url_in_param);

    let site_url = url_in_param ? url_in_param : ref_url ? ref_url : my_url;
    console.log('site url is ', site_url);
    this.fetchExternalHTML(site_url);
  }

  render() {
    return (
      <main role="main" className="container">
        {/* <div className="header">You are sharing: {this.state.url}</div> */}
        <div id="shareaction" className="effect5">
          <Preview
            url={this.state.url}
            title={this.state.title}
            img={this.state.img}
            description={this.state.description}
          />
          <ShareButtons />
        </div>
        <UseIt />
        <About />
      </main>
    );
  }
}

export default App;

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

  fetchExternalHTML(url, base_url) {
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

    const new_url = 'https://cors-anywhere.herokuapp.com/' + url;
    axios
      .get(new_url)
      .then(response => {
        const data = response.data;
        this.extractInfo(data, url, base_url);
      })
      .catch(error => {
        // This is where you run code if the server returns any errors
        console.log('Got fetch error ', error);
      });
  }

  extractInfo(data, site_url, base_url){
    let website_object = { url: site_url };

    // console.log(data);
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(data, 'text/html');

    // Now we start getting attributes of title, description and image.

    // Get the title
    let title = this.getParameterByName('title', base_url);
    console.log('title in url is ', title);
    if(!title){
      const titles = htmlDoc.getElementsByTagName('title');
      if(titles.length>0){ 
        title = titles[titles.length - 1].innerHTML;
      }else {
        title = "Click here to set title";
      }
    }
    website_object.title = title;
    
    // Get description
    let description = this.getParameterByName('description', base_url);
    console.log('description in url is ', description);

    if(!description){
      // get description from meta og:description

      let descriptions = htmlDoc.querySelectorAll('[name="description"]');
      console.log("Descriptions are ", descriptions);

      if(descriptions.length > 0){
        description = descriptions[descriptions.length - 1].content;
        if(!description){
          description = 'Click here to set description';
        }
      }else {
        description = "Click here to set description";
      }
    }
    website_object.description = description;
    console.log('website_object is ', website_object);

    var metas = htmlDoc.getElementsByTagName('meta'); 
    // metas.map(meta => {return console.log(meta)})
    console.log("metas are", metas)

    this.setState(website_object);
  }

  componentWillMount() {
    const ref_url = document.referrer;
    const my_url = window.location.href;
    console.log('Ref URL is ', ref_url);
    // console.log('My URL is ', my_url);
    const url_in_param = this.getParameterByName('url', my_url);
    // console.log('URL in param is ', url_in_param);

    let site_url = url_in_param ? url_in_param : ref_url ? ref_url : my_url;
    console.log('site url is ', site_url);
    this.fetchExternalHTML(site_url, my_url);
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

import React, { Component } from 'react';
import './App.css';
import Preview from './components/Preview';
import ShareButtons from './components/ShareButtons';
import UseIt from './components/UseIt';
import About from './components/About';
import axios from 'axios';
import img_loading from './images/animated-loading.gif';
import img_notfound from './images/no-image.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'loading url...',
      title: 'loading title...',
      image: img_loading,
      description: 'loading description...'
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
    let title = this.getParameterByName('title', base_url);
    let description = this.getParameterByName('description', base_url);
    let image = this.getParameterByName('image', base_url);

    let htmlDoc, htmlBaseDoc;

    if(title && description && image){
      website_object.title = title;
      website_object.description = description;
      website_object.image = image;
      this.setState(website_object);
      this.child.generateSocialUrls();

    }else{
      const parser = new DOMParser();
      htmlBaseDoc = parser.parseFromString(data, 'text/html');
      const head_tag = htmlBaseDoc.getElementsByTagName('head');
      let head_html = '';
      if(head_tag){
        head_html = head_tag[0].innerHTML;
        htmlDoc = parser.parseFromString(head_html, 'text/html');
      }
      // Now we start getting attributes of title, description and image.

      // Get the title
      if(!title){
        const titles = htmlDoc.getElementsByTagName('title');
        console.log('titles are ', titles);
        if(titles.length>0 && titles[0].innerHTML){ 
          title = titles[0].innerHTML;
        }else{
          let og_titles = htmlDoc.querySelectorAll('meta[property="og:title"]');
          console.log('og_titles is ', og_titles);
          if (og_titles.length && og_titles[0].content) {
            title = og_titles[0].content;
            console.log('ogtitle waala title is ', title);
          } else {
            title = 'Click here to set title';
          }
        }
      }
      website_object.title = title;
      
      // Get description
      if(!description){
        let descriptions = htmlDoc.querySelectorAll('[name="description"]');
        console.log("Descriptions are ", descriptions);

        if (descriptions.length && descriptions[descriptions.length - 1 ].content) {
          description = descriptions[descriptions.length - 1].content;
        }else {
          // get description from meta og:description
          let og_descriptions = htmlDoc.querySelectorAll('meta[property="og:description]');
          console.log("og_description is ", og_descriptions);
          if(og_descriptions.length && og_descriptions[0].content){
            description = og_descriptions[0].content;
            console.log('og_description is', description);
              if (!description) {
                description = 'Click here to set description';
              }
            } else {
              description = 'Click here to set description';
            }
        }
      }
      website_object.description = description;
      console.log('website_object is ', website_object);

      // Get image
      if(!image){
        // get image from meta og:image
        let og_images = htmlDoc.querySelectorAll('meta[property="og:image"]');
        console.log('og_images is ', og_images);
        if (og_images.length && og_images[0].content) {
          image = og_images[0].content;
          console.log('og_image waala image is', image);
        } else {
            // Now we will load the first image from the body
            // let images = htmlBaseDoc.getElementsByTagName('img');
            // console.log('Images are ', images);
            // if(images.length){
            //   image = images[0].src;
            //   // if(strpos($src, 'http://sitename.com/path/') !== 0){
            //   //   $img->setAttribute('src', "http://sitename.com/path/$src");
            //   // }
            // }else{
              image = img_notfound;
            // }
        }
      }
      website_object.image = image;
      console.log('website_object is ', website_object);
      this.setState(website_object);
      this.child.generateSocialUrls();
    }
    // this.setState(website_object);
  }

  componentWillMount() {
    const ref_url = document.referrer;
    const my_url = window.location.href;
    // console.log('Ref URL is ', ref_url);
    // console.log('My URL is ', my_url);
    const url_in_param = this.getParameterByName('url', my_url);
    // console.log('URL in param is ', url_in_param);

    let site_url = url_in_param ? url_in_param : ref_url ? ref_url : my_url;
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
            image={this.state.image}
            description={this.state.description}
          />
          <ShareButtons remoteSite={this.state} onRef={ref => (this.child = ref)} />
        </div>
        <UseIt />
        <About />
      </main>
    );
  }
}

export default App;

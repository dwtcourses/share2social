import React, { Component } from 'react';
import './About.css';

class About extends Component {
    render(){
        return (
        <div id="about" className="container effect4">
          <div className="row">
            <div className="col-sm">
              <h1>About Link Share</h1>
              <p>Linkshare was built because there is no easy way to embed the share button in github and other repositories. Also whenever you put the social media provided sharing code, it not only loads very large javascript files for each social media, it also tracks all the visitors that come to your site. this causes not only a significant performance issue for your website, it is a serious threat to the privacy of your users. </p>
              <p></p>
                <ul>
                    <li> <a href="https://share2social.com">Share this page</a> </li>
                    <li> <a href="https://github.com/gunjankarun/share2social">Github repository</a></li>
                    <li> <a href="https://www.paypal.me/quadralyst">Donate and support opensource activities</a></li>
                    <li> <a href="https://github.com/gunjankarun/share2social/issues">Report issues or feature requests</a></li>
                    <li> <a href="https://linkedin.com/in/gunjankarun">My profile on LinkedIn (Gunjan Karun) </a></li>
                </ul>
            <p>Disclaimer: Apart from whatever tracking is done by Github, where this project resides, this site uses Google Analytics to track load, usage, performance and issues in this page. Apart from that, it does not store or share any kind of information about the visitors to this site.</p>
            </div>
          </div>
        </div>
        );
    }
}

export default About;


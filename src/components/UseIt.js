import React, { Component } from 'react';
import './UseIt.css';

class UseIt extends Component {
    render(){
        return (
        <div id="useit" className="container effect6">
          <div className="row">
            <div className="col-sm">
              <h1> Do you want to use this page to share your website? </h1>
              <p>Welcome to the easier way to let your visitors share your web pages without adding any performance degrading bloatware code or privacy hijacking site tracking code from the various social media websites.</p>
              <h4>Super simple method</h4>
              <p>It could not get simpler than this. Just put a link to this page on your page, or copy and paste the following code on your web page. This page will get the referring url and extract necessary information from the title tag, meta tags and open graph meta tags from that web page.</p>
              <div>
                <code>
                  &lt;a href="https://linkshare.abc"&gt;Click here to share this page&lt;/a&gt;
                </code>
              </div>
              <br />
              <h4>Pass a url</h4>
              <p>If you need to share a specific url, use a <b>url</b> parameter called url with the absolute url to share </p>
              <div>
                <code>
                  &lt;a href="https://linkshare.abc?url=http://yoursite.com"&gt;Click here to share this page&lt;/a&gt;
                </code>
              </div>
              <br />
              <h4>Pass everything</h4>
              <p>If you want to control the title, description and image that is being shared, you can pass the following parameters in the url: 
                <li><b>url</b>=https://yourwebsite.com</li>
                <li><b>title</b>=Your custom title</li>
                <li><b>description</b>=Your custom description</li>
                <li><b>image</b>=https://yourwebsite.com/custom_image.png</li>
              </p>
              <div>
                <code>
                  &lt;a href="https://linkshare.abc?url=http://yourwebsite.com&title=Your title&description=Your description&image=https://yourwebsite.com/custom_image.png"&gt;Click here to share this page&lt;/a&gt;
                </code>
              </div>
            </div>
          </div>
        </div>

        );
    }
}

export default UseIt;


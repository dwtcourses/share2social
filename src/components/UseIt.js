import React, { Component } from 'react';
import './UseIt.css';

class UseIt extends Component {
    render(){
        return (
        <div id="useit" className="container effect6">
          <div className="row">
            <div className="col-sm">
              <h1> Add a share button to github README.md file </h1>
              <p>Welcome to the easier way to let the visitors to your visitors or github repository, share your web pages or github repo without adding any performance degrading bloatware code or privacy hijacking site tracking code from the various social media websites.</p>
              <p>IMPORTANT: For this page to fetch the correct details, make sure that the meta tags (title, description and og:image) on your web page are correct. </p>
              <h4>In your README.md file</h4>
              <p>In your github or other README.md file or wiki page, put a link to this page https://share2social.com. If you want to set a custom anchor text, use the following tag</p>
              <div>
                <code>
                  [Click here to share this repo](https://share2social.com)
                </code>
                <p>This page will automatically identify the referring url, extract details from title and meta tags and create the share buttons for your url.</p>
              </div>
              <br />
              <h4>Super simple method for any html page</h4>
              <p>It could not get simpler than this. Just put a link to this page on your page, or copy and paste the following code on your web page. This page will get the referring url and extract necessary information from the title tag, meta tags and open graph meta tags from that web page.</p>
              <div>
                <code>
                  &lt;a href="https://share2social.com"&gt;Click here to share this page&lt;/a&gt;
                </code>
                <p>This page will automatically identify the referring url, extract details from title and meta tags and create the share buttons for your url.</p>
              </div>
              <br />
              <h4>Pass a url</h4>
              <p>If you need to share a specific url, use a <b>url</b> parameter called url with the absolute url to share </p>
              <div>
                <code>
                  &lt;a href="https://share2social.com?url=http://yoursite.com"&gt;Click here to share this page&lt;/a&gt;
                </code>
                <p>This page will automatically load this url that you passed in the url parameter, extract details from title and meta tags and create the share buttons for your url.</p>
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
                  &lt;a href="https://share2social.com?url=http://yourwebsite.com&title=Your title&description=Your description&image=https://yourwebsite.com/custom_image.png"&gt;Click here to share this page&lt;/a&gt;
                </code>
              </div>
            </div>
          </div>
        </div>

        );
    }
}

export default UseIt;


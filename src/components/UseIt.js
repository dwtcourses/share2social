import React, { Component } from 'react';
import './UseIt.css';

class UseIt extends Component {
    render(){
        return (
        <div id="useit" className="container effect6">
          <div className="row">
            <div className="col-sm">
              <h1> Let your users share your web pages </h1>
              <h4>Super simple method</h4>
              <p>It could not get simpler than this. Just put a link to this page on your page, or copy and paste the following code on your web page.</p>
              <div>
                <code>
                  &lt;a href="https://linkshare.abc"&gt;Click here to share this page&lt;/a&gt;
                </code>
              </div>
              <br />
              <h4>If that does not work</h4>
              <p>In the code above, replace "https://linkshare.abc" with "https://linkshare.abc?url=http://yoursite.com"</p>
              <div>
                <code>
                  &lt;a href="https://linkshare.abc?url=http://yoursite.com"&gt;Click here to share this page&lt;/a&gt;
                </code>
              </div>
            </div>
          </div>
        </div>

        );
    }
}

export default UseIt;


import React, { Component } from 'react';
import './ShareButton.css';
import social_icons from '../images/social-icons.jpg';

class ShareButton extends Component {
    render(){
        return <div className="col-sm share-button" title={"Click here to share on " + this.props.label}>
            <div className={'icon ' + this.props.name} style={{ backgroundImage: `url(${String(social_icons)})` }} />
            {this.props.label}
          </div>;
    }
}

export default ShareButton;


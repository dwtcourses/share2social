import React, { Component } from 'react';
import './ShareButton.css';
import social_icons from '../images/social-icons.jpg';

class ShareButton extends Component {
    render(){
        let icon = null;

        if(this.props.icon.src){
            icon = <img src={this.props.icon.src} alt={this.props.name + ' icon'} className="icon" />
        }else{
            icon = <div className={'icon ' + this.props.name} style={{ backgroundImage: `url(${String(social_icons)})` }} />;
        }
        return <div className="col-sm-2 share-button" title={"Click here to share on " + this.props.label}>
            {icon}
            {this.props.label}
          </div>;
    }
}

export default ShareButton;


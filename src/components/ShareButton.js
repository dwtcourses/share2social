import React, { Component } from 'react';
import './ShareButton.css';
import social_icons from '../images/social-icons.jpg';

class ShareButton extends Component {
    handleClick(){
        console.log('Clicked URL is ', this.props.url);
        // this.show_popup(this.props.url);
    }

    show_popup(url){
        const height = 400, width = 800;
        
        const x = Math.floor(((window.screen.availWidth || 1024) - width) / 2),
        y = Math.floor(((window.screen.availHeight || 700) - height) / 2);

        var popup = window.open(url, 'share2social', 'width=' + width + ',height=' + height + ',left=' + x + ',top=' + y + ',location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1');

        if (popup) {
            popup.focus();
        }
    }

    render(){
        let icon = null;

        if(this.props.icon.src){
            icon = <img src={this.props.icon.src} alt={this.props.name + ' icon'} className="icon" />
        }else{
            icon = <div className={'icon ' + this.props.name} style={{ backgroundImage: `url(${String(social_icons)})` }} />;
        }
        return <div className="col-sm-2 share-button" onClick={this.handleClick.bind(this)} title={"Click here to share on " + this.props.label}>
            {icon}
            <br />
            <span className="share_label">{this.props.label}</span>
          </div>;
    }
}

export default ShareButton;


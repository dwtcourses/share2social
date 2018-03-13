import React, { Component } from 'react';
import ShareButton from './ShareButton';
import social_icons from '../images/social-icons.jpg';

class ShareButtons extends Component {
    constructor(){
        super();
        this.state={
            sites: [
                {
                    name: "facebook",
                    label: "Facebook",
                    url: "http://facebook.com",
                    icon:{
                        src:'',
                        bg: social_icons,
                        top: -230,
                        left: -284
                    }
                },
                {
                    name: "twitter",
                    label: "Twitter",
                    url: "http://twitter.com",
                    icon:{
                        src:'',
                        bg: social_icons,
                        top: -386,
                        left: -284
                    }
                },
                {
                    name: "linkedin",
                    label: "LinkedIn",
                    url: "http://linkedin.com",
                    icon:{
                        src:'',
                        bg: social_icons,
                        top: -700,
                        left: -284
                    }

                },
                {
                    name: "whatsapp",
                    label: "WhatsApp",
                    url: "http://whatsapp.com",
                    icon:{
                        src:'',
                        bg: social_icons,
                        top: -544,
                        left: -445
                    }

                },
                {
                    name: "googleplus",
                    label: "Google+",
                    url: "http://plus.google.com",
                    icon:{
                        src:'',
                        bg: social_icons,
                        top: -544,
                        left: -284
                    }

                },
            ]
        }
    }
    render(){
        return <div className="container">
            <h2>Click to share</h2>
            <div className="row">
                {this.state.sites.map(site => {
                    return <ShareButton key={site.name} name={site.name} label={site.label} icon={site.icon} url={site.url} />;
                })}
            </div>
          </div>;
    }
}

export default ShareButtons;
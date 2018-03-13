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
                        src: null,
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
                        src: null,
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
                        src: null,
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
                        src: null,
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
                        src: null,
                        bg: social_icons,
                        top: -544,
                        left: -284
                    }

                },
                {
                    name: "ycombinator",
                    label: "Y Combinator",
                    url: "https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fnews.ycombinator.com%2Fbookmarklet.html&t=Y%20Combinator%3A%20Bookmarklet",
                    icon:{
                        src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX7ZR7////7YRT8jWD+6N7+0cD7cS7+7eX8lGr7Yxn7WQD+28v7Yhb7XAD7Yxv/+/n/8+3/9/T7Xwv7aBz9xK77aif+39L8i1f+1cb7ayj8iVv9u539xKr7eUP8ooD8g1H9yrf8kGb9sZD9sJP8qYr8ejr7czL9yrH9uZj8gUX9vKH9n3b9sJL7fkv8kmP+3tL8nXr8mnD9JQDTAAAE1UlEQVR4nO3ba1viSBAFYGhQiHQuJA4GkIsCKq7MDP//z21YF8c+zSVpUbuY834dJk/Kk26qklCrEREREREREREREREREREREREREREREREJEygUOR9Lw5GCE56nu9W6bRpcOpd4A4eanPJEXQU/W6C5Vm6HUpPcPFLS9iHEYNGpg+mD24mpZzhQb+RDhTX1Gyus3zmFqCY9OM7Y8WI4seByihVe9F1WYjbEwzheCyeX/k6wxIbDH19PmuZBuuP09CfrJOpbIXZCh+PMMEL3PfnU0nYLS5xUDjEYwZWQ/ONLhAV9ghDDJ4ww8ybCzS6IKzG+qRhilMWwCqse4XOFtx8N0Ypw6rKUP0+kIYF6sq60ioI+HqDvyTfFVniPIeaVlpF1ETz5FeFmGeF2Wmkr1EtYyF3fIiw2mzGGOK3Q2KTX8J/vvdpm/hM8YFOZlB8x1ADamaYfLbcpsEK8Lt2TaBwq5p96qo6CRQ6n2S07YlgRdnyMsFhL4y6GWG4lRhlEGM896tfe2dGAD3SZ/6gHsA97MzWhdI2920WZyzSqQYT+TE0oyi4wxGWJEPUK/jC50/z8JVTDCrFEZ5JihNX6va+V4kqMj8+JwSV0pPkH7rd+Or3A/vl4iFf4XejX1IRCPN3k2PlaET761nKbohBDzNPD11yIF3bm6TfFVopTVKt9MEQ1gTZh6HeEmwYcGrD69MehEBVEmPjZrxnmVUJUDWhnXr7uRF0FI3yMcaA7jTKYC5urUn3e99Jz2GyS/TfA1R1EOPP/Gt01RT3vW4nWUNGTEOFmioLeLZ7sOW91Z34yfvF9I31lN+C3u6+96AfcYMt9nZqQPUWNdoaoB+bn/J2aLApD3N2JaYiw49ODisOsRiVe7Lj89NLcdOO2mAiLZvMRQtz1EOIKPpQLKrAW9KHCxB72gwf4zELEN8WW/TDQCjGExfp49R0n6iy4hO20hY2NujHXaiwrwuK7DhvwaWBulBoiHH7TiTrTI3iM0TJvgKdtM+TWvr7HY9iAX7/vTqMM5sJZTcx34ZbGKcpYifj2Rk9ghDU1x/sTf0KM+jAXDgUWWGynMEUlf3LCoaK3u3H1nfUy2NP2X6K+2ZF2ZzKmJhRpDHHbneJQ8cuf17uqUT9hJd5vozJH+3gsM8Ka3Zglr3eHg5FZ+S85UxPSS7PC+uuzXbz17/Kqpi/wPaCWjuw32Jze1PQFTkjx5j4Fzh1LwREW1yk8xmhmUXBprsJbkV+Fb/TI7M664xRWYVdiv2aAEPNsYda893axFHplTlGtxszYZ5oD0atwI3gxd84Ls+Jnud+FW/gsKjYj9PuhfTkpTlFGhJLuIO4TZdbvot70pDyoOCxd7wtRyrOmo0J8oPgWofxt5pW62VOhTz+K+RjrnZn/Izzyqo0gerSzQslTE1LWT2oKnTMqsAjR+oVi2ReIxbB+UlO/ld5ym/QKXwY78JaNTNkMHmM8+/uqsxt8+6l5bhHWVMO8TL39wYEzq0Kpt7n3YoXysUL5WKF8rFA+VigfK5SPFcrHCuVjhfKxQvlYoXysUD5WKB8rlI8VyscK5WOF8rFC+VihfKxQPlYo399XYX52FQaTx857w3N7vbQoMbx673x+iEBEREREREREREREREREREREREREROSXfwGDHUbrAgqPaQAAAABJRU5ErkJggg==',
                        bg: '',
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
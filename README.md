# Share 2 Social : or how to add a share button to github README.md file or your website

===========================================

Welcome to the easier way to let the visitors share your web pages or github repo without adding any performance degrading bloatware code or privacy hijacking site tracking code from the various social media websites.

To check it out in action, click https://share2social.com This will open the sharing page for this url.

## How to use this service for your own website

#### In your README.md file

In your github or other README.md file or wiki page, put a link to this page https://share2social.com. If you want to set a custom anchor text, use the following tag

`[Click here to share this repo](https://share2social.com)`  

This page will automatically identify the referring url, extract details from title and meta tags and create the share buttons for your url.

#### Super simple method for any html page

It could not get simpler than this. Just put a link to this page on your html page, or copy and paste the following code on your web page. 

`<a href="https://share2social.com">Click here to share this page</a>`

This page will automatically identify the referring url, extract details from title and meta tags and create the share buttons for your url.

#### Pass a url

If no parameters are passed, it will fetch the information of the page on which this linked was clicked. If you need to share a different url from the page on which the user clicked this link, use a url parameter called **`url`** with the absolute url to share

`<a href="https://share2social.com?url=http://yoursite.com">Click here to share this page</a>`

This page will automatically load the url that you passed, extract details from title and meta tags and create the share buttons for your url.

#### Pass everything

If you want to control the title, description and image that is being shared, you can pass the following parameters in the url:

*   **url**=https://yourwebsite.com
*   **title**=Your custom title
*   **description**=Your custom description
*   **image**=https://yourwebsite.com/custom_image.png

`<a href="https://share2social.com?url=http://yourwebsite.com&title=Your title&description=Your description&image=https://yourwebsite.com/custom_image.png">Click here to share this page</a>`

## Built using  

* React
* Core Javascript

## Useful links

*   [Share this page](https://share2social.com)
*   [Donate (and support my opensource activities)](https://www.paypal.me/quadralyst)
*   [Report issues or feature requests](https://github.com/gunjankarun/share2social/issues)
*   [My profile on LinkedIn (Gunjan Karun)](https://linkedin.com/in/gunjankarun)

# Credits
1. Uses Free social media icons from <a href='https://www.freepik.com/free-vector/flat-social-media-icons-pack_871049.htm'>Social media icons designed by Freepik</a>

2. Uses the Cors Anywhere Library by Rob Wu https://github.com/Rob--W/cors-anywhere/


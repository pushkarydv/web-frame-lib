<div align="center">
  <h1> <img src="./logo.png" width="64px"><br/>Web Frame lib</h1>
  <a href="https://www.npmjs.com/package/web-frame-lib"><img src="https://badge.fury.io/js/web-frame-lib.svg"/></a>
  <a href="https://github.com/pushkarydv/web-frame-lib/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT%202.0-blue.svg"/></a>
  <a href="https://github.com/pushkarydv/web-frame-lib/issues"><img src="https://img.shields.io/github/issues/pushkarydv/web-frame-lib.svg"/></a>
  <img src="https://img.shields.io/github/languages/top/pushkarydv/web-frame-lib"/>
  <img src="https://img.shields.io/github/languages/code-size/pushkarydv/web-frame-lib"/>
  <img src="https://img.shields.io/github/last-commit/pushkarydv/web-frame-lib"/>
  <br/>
  Web Frame lib allows you to easily integrate your bots, dynamic pages and other with button trigger based architecture into you apps.
</div>

# How to use? 

- Install [web-frame-lib](http://npmjs.com/package/web-frame-lib) package from npm

    ```bash
    npm i web-frame-lib
    ```

- Adding to your Project

    ```jsx
    import { useEffect } from 'react';
    import { initWebFrame } from 'web-frame-lib';

    const App = () => {

        //  this will mount it after page render
        useEffect(()=>{
            initWebFrame({
                url: 'https://your-website.com',
            })

            // other options available below in Readme
        },[]);

        return(
            <>Hello</>
        )
    }

    ```

- That's all your chatbot, message service or whatever you ahve done is now availabe in your app with just a click of button.

# Options

- Edit config object

    ```jsx
    initWebFrame({
        url: 'https://your-website.com',
        config: {
            activatorText: `Chat With US`, //default
            closeText: `Close`, //default
            color: `#000`,  //default
            backgroundColor: `#fff`,    //default
            wfl_css: wfl_css,  //default
            css: ``,   // add custom css triggering classes inside
        },
        executeAfterWfl: (config, button) => {
            //  this will execute within scope of this script so that you can perform additional actions
            console.log('executeAfterWfl', config, button)
        },    
    })
    ```


# Styling

| id | description |
| --- | --- |
| wfl-cta-button | Primary Triggering button |
| wfl-cross | Cross button on mobile ui (ful screen) |
| wfl-frame | iframe container |

- to apply additional customization you can pass a string of all css inside `config` object


Package Developed by [Pushkar Yadav](https://pushkaryadav.in).
For Support please contact [here](https://x.com/pushkaryadavin)
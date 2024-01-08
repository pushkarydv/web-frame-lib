/* --------------------------------------------------------
                    web-frame-lib
                Bulit by: Pushkar Yadav
            Github:http://github.com/pushkarydv
--------------------------------------------------------  */
const wfl_css = `
#wfl-cta-button {
    box-sizing: border-box;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: fit-content;
    cursor: pointer;
    border-radius: 2.5rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease all;
    background: #242b2e;
    color: #fff;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    bottom: 20px;
    right: 20px;
    z-index: 99997;
}

#wfl-cta-button:active {
    border: none;
    outline: none;
    transform: scale(95%);
}

#wfl-cross{
    position: absolute;
    z-index: 99999;
    right: 1rem;
    top: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    border-radius: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease all;
    background: #fff;
    color: #000;
    border: 1px solid #000;
    outline: none;
    padding: 0.5rem;
    display: none;
}

#wfl-frame {
    width: 300px;
    height: 500px;
    max-height: 80vh;
    min-height: 200px;
    overflow-x: hidden;
    border-radius: 0.6rem;
    border: 2px solid #000
    background: #fff;
    position: fixed;
    right: 1rem;
    z-index: 99998;
    bottom: 5rem;
}

@media screen and (max-width: 1200px) {
    #wfl-frame {
        width: 250px;
        height: 400px;
    }
}

@media screen and (max-width: 450px) {
    #wfl-frame {
        width: 100%;
        height: 100%;
        max-height: 100%;
        min-height: 100%;
        border-radius: 0;
        top: 0;
        left: 0;
    }
}
`;

let wfl_config = {
  activatorText: `Chat With US`,
  closeText: `Close`,
  color: `#000`,
  backgroundColor: `#fff`,
  wfl_css: wfl_css,
  css: ``,
};

let IS_WFL_WINDOW_OPEN = false;

function addCustomCSS(css) {
  let style = document.createElement('style');
  style.innerHTML = css;
  document.head.appendChild(style);
}

function triggerwflFrame() {
  let wfl_frame = document.getElementById('wfl-frame');
  if (wfl_frame) {
    IS_WFL_WINDOW_OPEN = !IS_WFL_WINDOW_OPEN;
    if (IS_WFL_WINDOW_OPEN) {
      wfl_frame.style.display = 'block';
      document.getElementById('wfl-cta-button').innerHTML =
        wfl_config.closeText;

      if (window.innerWidth < 450) {
        document.getElementById('wfl-cross').style.display = 'flex';
      }
    } else {
      wfl_frame.style.display = 'none';
      document.getElementById('wfl-cta-button').innerHTML =
        wfl_config.activatorText;
      document.getElementById('wfl-cross').style.display = 'none';
    }
  }
}

function initWebFrame({
  url,
  config,
  executeAfterWfl = (a, b) => {
    console.log(a, b);
  },
}) {
  if (!url) throw new Error('Please provide a url');
  if (!config) config = {};

  wfl_config = {
    ...wfl_config,
    ...config,
  };

  // Check if button is already mounted (script is already running)
  let wfl_button = document.getElementById('wfl-cta-button');
  if (wfl_button) return;

  // creating frame
  let wfl_frame = document.createElement('iframe');
  wfl_frame.setAttribute('id', 'wfl-frame');
  wfl_frame.setAttribute('src', url);
  wfl_frame.setAttribute('allow', 'microphone');
  wfl_frame.setAttribute('allowFullScreen', true);
  wfl_frame.setAttribute('frameborder', 0);
  wfl_frame.setAttribute('scrolling', 'yes');
  wfl_frame.setAttribute('style', 'display:none;');
  document.body.appendChild(wfl_frame);

  // creating button
  let wfl_activator = document.createElement('button');
  wfl_activator.setAttribute('id', 'wfl-cta-button');
  wfl_activator.innerHTML = wfl_config.activatorText;
  wfl_activator.addEventListener('click', triggerwflFrame);
  document.body.appendChild(wfl_activator);

  // mobile top close
  let wfl_cross = document.createElement('button');
  wfl_cross.setAttribute('id', 'wfl-cross');
  wfl_cross.innerHTML =
    '<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.775 460.775" ><path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/></svg>';
  wfl_cross.addEventListener('click', triggerwflFrame);
  document.body.appendChild(wfl_cross);

  // adding styling
  addCustomCSS(wfl_config.wfl_css);
  addCustomCSS(wfl_config.css);

  // this function will be called within scope of wfl
  executeAfterWfl(wfl_config, IS_WFL_WINDOW_OPEN);
}

module.exports =  { initWebFrame };

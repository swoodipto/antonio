function cssm() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    #tabs-container.no-thumbs.bottom {
        order: -1;
        padding-bottom: 0px;
    }
    .toolbar.toolbar-addressbar {
        display: flex;
        order: -2 !important;
    }
    .toolbar.toolbar-insideinput {
        position: absolute;
        width: 100%;
        justify-content: flex-end;
    }
    .address-top #tabs-container.bottom {
        border: 0;
    }
    .tabs-bottom .tab-position .tab {
        border-radius: 0;
    }

    .tabs-bottom .tab.active:not(.marked):not(.tab-mini):before,
    .tabs-bottom .tab.active:not(.marked):not(.tab-mini):after,
    .addressfield .pageload .pageload-ticker {
        display: none;
    }
    .stacks-on.tabs-bottom .tab-strip .tab-group-indicator {
        bottom: 25px;
    }
    .stacks-on.tabs-bottom .tab-strip .tab-group-indicator .tab-indicator.active {
        padding-top: 3px;
    }
    #header {
        min-height: 0 !important;
        z-index: auto;
    }
    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        -webkit-app-region: drag;
    }
    .toolbar > .button-toolbar.button-circularimage {
        order: 1;
        margin-right: 6px;
    }
    #browser.mac .window-buttongroup {
        display: flex;
        margin-top: 0 !important;
    }
    #browser.mac.popup .window-buttongroup {
        margin-top: 4px !important;
    }
    #browser.mac .window-buttongroup button {
        margin-right: 8px;
    }
    #browser.mac .window-buttongroup button.window-minimze {
        order: 1;
    }
    #browser.mac .window-buttongroup button.window-maximize {
        order: 2;
    }
    .addressfield {
        max-width: 600px;
    }
    .UrlBar-UrlField:not(:focus) {
        text-align: center;
        margin-left: -24px;
        padding-left: 30px;
        width: 590px;
    }
    .addressfield .button-toolbar button:not(.button-popup) {
        display: none;
    }

    .addressfield .button-toolbar.create-bookmark .button-popup {
        position: absolute !important;
        left: -310px !important;
    }
    .extension-popup, .button-popup {
        box-shadow: 0 0 40px rgba(0,0,0,0.25);
        top: 76px !important;
    }
    .extension-popup.top:before,
    .extension-popup.top:after,
    .button-popup-arrow:before {
        display: none;
    }
    .startpage .startpage-content .searchfield {
        display: none;
    }
    .startpage .startpage-navigation .startpage-navigation-group {
        border-left: 0;
    }
    .startpage .startpage-navigation .startpage-navigation-group .button-startpage:hover {
        background: rgba(0,0,0,0.3);
    }
    button.button-startpage:after {
        display: none;
    }
    `;
    document.getElementsByTagName('head')[0].appendChild(style);
}

function safariStyle() {

    cssm();

    const adr = document.querySelector('.toolbar-addressbar.toolbar');
    var windowbuttons = document.querySelector('.window-buttongroup');
    var container = document.createElement('div');
    var extwrapper = document.querySelector('.toolbar-addressbar.toolbar > .extensions-wrapper');
    var tools = document.querySelector('.toolbar-addressbar.toolbar .toolbar');
    var adfield = document.querySelector('.addressfield');

    container.classList.add('container');
    adr.insertBefore(windowbuttons,adr.firstChild);
    adr.insertBefore(container,adr.lastChild);
    container.appendChild(tools);
    container.appendChild(adfield);
    container.appendChild(extwrapper);
}

// Loop waiting for the browser to load the UI. You can call all functions from just one instance.

setTimeout(function wait() {
    const browser = document.getElementById('browser');
    if (browser) {
        safariStyle();
    }
    else {
        setTimeout(wait, 300);
    }
}, 300);
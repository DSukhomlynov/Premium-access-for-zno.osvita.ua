(function injectScript() {
    const status = window.statusPrem;
    const script = document.createElement('script');

    if(status){
        script.src = chrome.runtime.getURL('enable-premium-injection.js');
    }else{
        script.src = chrome.runtime.getURL('disable-premium-injection.js');
    }

    script.onload = () => script.remove();
    (document.head || document.documentElement).appendChild(script);
})();

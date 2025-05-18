function togglePremStatus(enable) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tab = tabs[0];
        if (!tab || !tab.id) {
            console.error("❌ Не удалось получить активную вкладку");
            return;
        }

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (status) => {
                window.statusPrem = status;
            },
            args: [enable]
        }, () => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                files: ['inject.js']
            });
        });
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'patch_isPrem') {
        togglePremStatus(true);
    }
    if (message.action === 'patch_disablePrem') {
        togglePremStatus(false);
    }
});

chrome.devtools.panels.create('Test', '../images/icon-128.png', '../html/panel.html', function(extensionPanel) {
    var _window;
    // var data = [];
    // var port = chrome.runtime.connect({ name: 'devtools' });

    // port.onMessage.addListener(function(msg) {
    //     // Write information to the panel, if exists.
    //     // If we don't have a panel reference (yet), queue the data.
    //     if (_window) {
    //         _window.do_something(msg);
    //     } else {
    //         data.push(msg);
    //     }
    // });

    extensionPanel.onShown.addListener(function tmp(panelWindow) {
        extensionPanel.onShown.removeListener(tmp); // Run once only
        _window = panelWindow;

        chrome.devtools.network.onRequestFinished.addListener(function(network) {
            if (/chrome-extension/.test(network.request.url)) {
                _window.do_something(network.request.url);
            }
        });

    });
});

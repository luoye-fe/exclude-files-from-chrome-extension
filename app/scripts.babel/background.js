var ports = [];
chrome.runtime.onConnect.addListener(function(port) {
	if (port.name !== 'devtools') return;
	ports.push(port);
	port.onDisconnect.addListener(function() {
		var i = ports.indexOf(port);
		if (i !== -1) {
			ports.splice(i, 1)
		};
	});
});

changeColor.onclick = function(element) {
	
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, "iloveyou", function(response){
			console.log(response) // will show if you inspect element the popup and go console
		});
	});
};



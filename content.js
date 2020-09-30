/* Listen for messages */
alert("Loaded content");

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    
	alert(msg);
    if (msg && (msg == "iloveyou")) {
		
		var playButton = $(".player-controls__buttons .control-button:eq( 2 )")
		console.log(playButton);
		playButton.click()
		
		
		
		sendResponse("Done");
    }
	
	
	
});
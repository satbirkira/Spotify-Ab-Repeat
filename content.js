/* Listen for messages */
// alert("Loaded content");

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    

    if (msg && (msg == "iloveyou")) {
		
		var playButton = $(".player-controls__buttons .control-button:eq( 2 )")
		console.log(playButton);
		playButton.click()
		
		var progressBar = $(".progress-bar:eq( 0 )")
		console.log(progressBar)
		
		alert(progressBar.offset().top)
		alert(progressBar.offset().left)
		alert(progressBar.offset().left + progressBar.width())
		
		var trackLength = $(".playback-bar__progress-time:eq(1)")
		console.log(trackLength)
		alert(trackLength.text())
		
		var trackCurrentTime = $(".playback-bar__progress-time:eq(0)")
		console.log(trackCurrentTime)
		alert(trackCurrentTime.text())
		
		
		sendResponse("Done");
    }
	
	
	
});
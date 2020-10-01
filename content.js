/* Listen for messages */
// alert("Loaded content");

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    

    if (msg && (msg == "iloveyou")) {
		
		var playButton = $(".player-controls__buttons .control-button:eq( 2 )")
		console.log(playButton);
		playButton.click()
		
				
		//Check if already playing
		
		//Put track at correct time

		//Hit play if not already playing
		
		
		
		
		sendResponse("Done");
    }
	
});

$("body").on('DOMSubtreeModified', ".playback-bar__progress-time:eq(0)", function() {
    
	// Get track's length in time
	var trackLengthDom = $(".playback-bar__progress-time:eq(1)")
	var trackLengthText = trackLengthDom.text()
	
	// Get seek bar width as coordinates
	var seekBarDom = $(".progress-bar:eq( 0 )")
	var seekBarTopPosition = seekBarDom.offset().top
	var seekBarLeftPosition = seekBarDom.offset().left
	var seekBarRightPosition = seekBarLeftPosition + seekBarDom.width()
		
	
	// Get current time of the track
	var trackCurrentTimeDom = $(".playback-bar__progress-time:eq(0)")
	var trackCurrentTimeText = trackCurrentTimeDom.text()
	
	console.log(trackCurrentTimeText)
	
	// Split the time into an array with minutes and seconds
	var tokenizedCurrTime = trackCurrentTimeText.split(':')
	
	// Split the track length into an array with minutes and seconds
	var tokenizedFullTime = trackLengthText.split(':')
	
	// Get current time
	if (tokenizedCurrTime.length == 3) {
		curr_time_minute = tokenizedCurrTime[1]
		curr_time_second = tokenizedCurrTime[2]
	} else {
		curr_time_minute = tokenizedCurrTime[0]
		curr_time_second = tokenizedCurrTime[1]
	}
	
	// Get track length
	if (tokenizedFullTime.length == 3) {
		full_time_minute = tokenizedFullTime[1]
		full_time_second = tokenizedFullTime[2]
	} else {
		full_time_minute = tokenizedFullTime[0]
		full_time_second = tokenizedFullTime[1]
	}
	
	// Check if we have reached the loop end
	// If it get's to 1:40, go back to 1:20
	if (curr_time_minute ==  1 && curr_time_second == 40){
		// Get total number of seconds we want to reset to
		totalSecondsReset = 1*60 + 40
		
		// Get total number of seconds of the song
		totalSecondsTrack = (full_time_minute*60) + full_time_second
		
		// Get relative position of where we want to move back compared to full song (ex: 0.1 is 10% into song)
		relativePosition = totalSecondsReset / totalSecondsTrack
		
		// Calculate the coordinate we want to click
		clickLeftOffsetPosition = (seekBarRightPosition - seekBarLeftPosition) * relativePosition
		alert(clickLeftOffsetPosition)
		console.log(clickLeftOffsetPosition)
		
		var event = $.Event('click');
        event.clientX = clickLeftOffsetPosition;
        event.clientY = 0;
        seekBarDom.trigger(event);
		
	}
	
	
	//Check storage
	
	
	
});

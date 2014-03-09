$(document).ready(function(){
	alert("page loaded");
	//define parameters
	var len =  $(".box").length;
	var counter = -1;
	var canPlay = false;
	var start;
	
	var effects = [ {backgroundColor:"red"},
					{backgroundColor:"yellow"}];

// Initiate animation sequence
	var	initSequence = function(){
		if(!canPlay)return;
		if(counter < len-1){
			counter++;
			animate($(".box").eq(counter), effects[0], effects[1])
		}else{
			//swap styles in effects array
			counter = -1;
			effects.reverse();
			initSequence();  
		}
	}	

	// execute animate function on Element  
	function animate(_elem, _start, _end){
		$(_elem).css(_start);//set default state;
		//initiate animation
		$(_elem).animate(
			_end,50,function(){
				initSequence();
			}
		);
	}
	
	//Define click events for "Start" and "Stop" button
	$("input#start").click(function(){
		if(!canPlay){
			canPlay = true;
			initSequence();
		}
	})
	$("input#stop").click(function(){
		canPlay = false;
	})
	
})
function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function temperatureFrost() {
	var temperature = randomInt(0, 100);

	console.log(temperature);

	console.log(((100 - temperature) + 1) / 8);
	
	var blurAmount = Math.round(((100 - temperature) + 1) / 8) + "px";

	console.log(blurAmount)

	var oldBlur = $(".button.frost").css("text-shadow").match(/(-?\d+px)|(rgb\(.+\))/g);

	var newBlur = "0px 0px " + blurAmount + " " + oldBlur[0];

	console.log("newBlur: " + newBlur);

	$(".button.frost").css("text-shadow", newBlur);
	console.log($(".button.frost").css("text-shadow"));
}



jQuery(function($) {

	$(".button.frosted").each(function(index) {
		var $this = $(this),
	        $parentWithBackground;
	    
	    $parentWithBackground = $this.parents().filter(function() {
	        return $(this).css('background-image') !== 'none'
	    });
	    
	    $(this).css({
	        "background-image": $parentWithBackground.css("background-image"),
	        "background-repeat": $parentWithBackground.css("background-repeat"),
	        "background-size": $parentWithBackground.css("background-size"),
	        "background-position": $parentWithBackground.css("background-position"),
	        "background-attachment": $parentWithBackground.css("background-attachment")
	    });  
	});
});
 
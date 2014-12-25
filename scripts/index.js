function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

jQuery(function($) {
    setInterval(function() {
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
    }, 1000);
});
 
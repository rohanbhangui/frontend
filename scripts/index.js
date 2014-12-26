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

function findBackground(element) {
	if(element.parent().css("background-image") != undefined) {
		console.log("entered: " + element.parent().css("background-image"));
		return element.parent().css("background-image");
	}
	else
	{
		findBackground(element.parent());
	}
}

jQuery(function($) {

	// html2canvas($("html"), {
	//   onrendered: function(canvas) {
	//     $("body").append(canvas);
	//   }
	// });

	$(".button.frosted").each(function(index) {
		console.log(findBackground($(this)).replace('url(','').replace(')',''));
		$(this).css({
			"background-image": findBackground($(this)).replace('url(','').replace(')',''),
			"background-clip": 'border-box',
			"background-color": "none",
			"backgorund-repeat": "no-repeat"
		});
		console.log($(this).css("background"));
	});

	//$(".button.frost::before").css("background", findBackground($(this).parent()));

	//console.log($(".button.frost::before").css("background"));
    // var temperatureCycle = setInterval(temperatureFrost, 1000);

    // $(".button.frost").on("mouseenter", function() {

    // 	$(this).css({
    // 		"text-shadow": "0 0 0 rgba( 0, 0, 0, 0)",
    // 		"color": $(this).css("text-shadow").match(/(-?\d+px)|(rgb\(.+\))/g)[0],
    // 	});
    // 	clearInterval(temperatureCycle);
    // });

    // $(".button.frost").on("mouseleave", function() {
    // 	$(this).css({
    // 		"text-shadow": "0 0 0 " + $(this).css("text-shadow").match(/(-?\d+px)|(rgb\(.+\))/g)[0],
    // 		"color": "transparent",
    // 	});
    // 	temperatureCycle = setInterval(temperatureFrost, 1000);
    // });
});
 
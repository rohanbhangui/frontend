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

	if(element.css("background-image") == 'none') {
		return findBackground(element.parent());
	}
	else {
    console.log(element);
		return element.css("background");
	}
}

jQuery(function($) {

	// html2canvas($("html"), {
	//   onrendered: function(canvas) {
	//     $("body").append(canvas);
	//   }
	// });
	

	// $(".button.frosted").each(function(index) {
	// 	console.log($(this).css("background"));
	// 	findBackground($(this).parent()).replace('url(','').replace(')','')
	// 	var colorThief = new ColorThief();
	// 	var pallette = colorThief.getPalette(findBackground($(this).parent()).replace('url(','').replace(')',''), 8);
	// 	console.log(pallette);
	// 	$(this).css({
	// 		"background-image": findBackground($(this).parent()),
	// 		"background-clip": 'border-box',
	// 		"background-color": "none",
	// 		"background-repeat": "no-repeat",
	// 		"background-position": -1*$(this).offset().top + "px " + -1*$(this).offset().left + "px"
	// 	});
	// });
	
	$(".button.frosted").each(function(index) {
		$(this).css({
			"background": findBackground($(this).parent()),
		});
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
 
$(document).ready(function () {

	var $selectElem = $("select");
	$selectElem.find("option").map(function() {
			var $this = $(this);
			return $("<li>").attr("value", $this.attr("value")).text($this.text()).get();
	}).appendTo($("<ul>").attr({
			id: $selectElem.attr("id"),
			name: $selectElem.attr("name"),
			class: "select"
	})).parent().replaceAll($selectElem);

	$(".select > li:not(:first-child)").hide();

	$(".select").prepend($(".select > li:first-child"));

	$(document).on("click", function(event) {
		var target = $(event.target).parent();

		console.log($(event.target).parent());
	});


});
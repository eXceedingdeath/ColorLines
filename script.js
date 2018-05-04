var flex = "column";

$(document).ready(function () {
	
	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

	$(".box").on("mouseenter", function () {
		$(this).css('background-color', randomColor());
		$(this).css('box-shadow', "0 0 8px white");
		$(this).css('z-index', "100000");
	});

	$(".box").on("mouseleave", function () {
		$(this).css('box-shadow', "none");
		$(this).css('z-index', "1");
	});



$(".box").click(function() {

switch (flex) {
	case "column":
	$(".main").css("flex-direction" , "row");
	flex = "row";
	break;
	case "row":
	$(".main").css("flex-direction" , "column");
	flex = "column";
	break;
}

});

});
document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.15.4"; 

addEventListener("touchstart", on_touch_start);
var svg = document.getElementById("id_svg");
var rect_svg = svg.getBoundingClientRect();

function on_touch_start(e)
{
	var touches = e.changedTouches;
	for (var i = 0; i < touches.length; i++){
		var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("cx", touches[i].pageX - rect_svg.left);
		circle.setAttribute("cy", touches[i].pageY - rect_svg.top);
		circle.setAttribute("r", 10);
		svg.appendChild(circle);
	}
}
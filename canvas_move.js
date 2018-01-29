document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.22.5"; 

var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");
var rect_canvas = canvas.getBoundingClientRect();
var img = document.getElementById("id_img");

var top_x = 100;
var top_y = 100;

var img_width = 100;
var img_height = 100;


img.onload = function(){
	context.drawImage(img, top_x, top_y, img_width, img_height);
	var rect_img = img.getBoundingClientRect();
}
canvas.addEventListener("touchmove", on_touch_move);
canvas.addEventListener("touchstart", on_touch_start);

var offset_inside_image_x;
var offset_inside_image_y;
//----------------------------------------
function on_touch_start(e)
{
	e.preventDefault();
	
	var touches = e.changedTouches;
	for (var i = 0; i < touches.length; i++){
		if (touches[i].pageX - rect_canvas.left < top_x + img_width && touches[i].pageX - rect_canvas.left >= top_x && 
			touches[i].pageY - rect_canvas.top < top_y + img_height && touches[i].pageY - rect_canvas.top >= top_y) {
				offset_inside_image_x = (touches[i].pageX - rect_canvas.left) - top_x;
				offset_inside_image_y = (touches[i].pageY - rect_canvas.top) - top_y;
			}
	}
}
//----------------------------------------
function on_touch_move(e)
{
	e.preventDefault();
	
	var touches = e.changedTouches;
	for (var i = 0; i < touches.length; i++){
		if (touches[i].pageX - rect_canvas.left < top_x + img_width && touches[i].pageX - rect_canvas.left >= top_x && 
			touches[i].pageY - rect_canvas.top < top_y + img_height && touches[i].pageY - rect_canvas.top >= top_y) {
				context.clearRect(0, 0, 400, 300);
				top_x = touches[i].pageX - rect_canvas.left - offset_inside_image_x;
				top_y = touches[i].pageY - rect_canvas.top - offset_inside_image_y;
				context.drawImage(img, top_x, top_y, img_width, img_height);
			}
	}
}
//----------------------------------------
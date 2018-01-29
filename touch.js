 document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.08.10"; 
 
 var canvas = document.getElementById("id_canvas");
 var context = canvas.getContext("2d");
 var rect_canvas = canvas.getBoundingClientRect();

 canvas.addEventListener("touchstart", on_touch_start);
  canvas.addEventListener("touchmove", on_touch_move);
  canvas.addEventListener("touchend", on_touch_end);
  
  var touch_id = [];
 //-----------------------------------
 function generate_random_color()
 {
	 var litere = "0123456789ABCDEF";
	 var color = "#";
	 for (var i = 0; i < 6; i++)
		 color += litere[Math.floor(Math.random() * 16)];
	 return color;
 }
 //-----------------------------------
function on_touch_start(e)
{
	e.preventDefault();
	 var touches = e.changedTouches;
	 for (var i = 0; i < touches.length; i++){
		touch_id.push({id:touches[i].identifier, color:generate_random_color(), x:touches[i].pageX, y: touches[i].pageY });
		 
		context.beginPath();
		context.arc(touches[i].pageX - rect_canvas.left, touches[i].pageY - rect_canvas.top, 10, 0, 2 * Math.PI);
		context.strokeStyle = touch_id[touch_id.length - 1].color;
		context.fillStyle = touch_id[touch_id.length - 1].color;
		context.fill();
		context.stroke();
	 }
}
//-----------------------------------
function on_touch_move(e)
{
	e.preventDefault();
	var touches = e.changedTouches;	
	for (var i = 0; i < touches.length; i++){
		var color = "#FFFFFF";
		var j;
		for (j = 0; j < touch_id.length; j++)
			if (touches[i].identifier == touch_id[j].id){
				color = touch_id[j].color;
				break;
			}
		 context.beginPath();
		 context.moveTo(touch_id[j].x - rect_canvas.left, touch_id[j].y - rect_canvas.top);
		 context.lineWidth = 20;
		 context.lineTo(touches[i].pageX - rect_canvas.left, touches[i].pageY - rect_canvas.top);
		 context.arc(touches[i].pageX - rect_canvas.left, touches[i].pageY - rect_canvas.top, 10, 0, 2 * Math.PI);
		 context.strokeStyle = color;
		 context.fillStyle = color;
		 context.fill();
		 context.stroke();
		 touch_id[j].x = touches[i].pageX;
		 touch_id[j].y = touches[i].pageY;
	}
}
//-----------------------------------
function on_touch_end(e)
{
	e.preventDefault();
	var touches = e.changedTouches;	
	for (var i = 0; i < touches.length; i++){
		var j;
		for (j = 0; j < touch_id.length; j++)
			if (touches[i].identifier == touch_id[j].id){
				break;
			}
		// trebuie sters touch_id[j]
		touch_id.splice(j, 1);
	}
}
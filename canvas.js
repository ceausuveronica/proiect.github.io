 document.getElementById("id_logic_level_version").innerHTML = "Logic level version: 2017.11.01.3"; 
 
 var canvas = document.getElementById("id_canvas");
 var context = canvas.getContext("2d");
 
 context.beginPath();
 var w = canvas.getAttribute("width");
 var h = canvas.getAttribute("height");
 
 context.arc(w / 2, h / 2, 10, 0, 2 * Math.PI);
 context.strokeStyle = "red";
 context.stroke();


var jseyesimg="jseyes.gif";
var jseyeimg="jseyeblue.gif";
var jseyeslink="http://www.javascriptkit.com";


// Internal
var jseyeso=null, jseye1=null, jseye2=null;
var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes

// General utils

// Find object by name or id
function jseyesobj(id) {
  var i, x;
  x= document[id];
  if (!x && document.getElementById) x= document.getElementById(id);
  for (i=0; !x && i<document.forms.length; i++) x= document.forms[i][id];
  return(x);
}


// Move eyes
function jseyesmove(x, y) {
  var ex, ey, dx, dy;
  if (jseyeso && jseye1 && jseye2 && jseyeso.style) {
    ex=jseyeso.offsetLeft+46; ey=jseyeso.offsetTop+58;
    dx=x-ex; dy=y-ey;
    r=(dx*dx/49+dy*dy/289<1) ? 1 : Math.sqrt(49*289/(dx*dx*289+dy*dy*49));
    jseye1.style.left= r*dx+36.5+'px'; jseye1.style.top= r*dy+44+'px';
    ex+=56; dx-=56;
    r=(dx*dx/49+dy*dy/289<1) ? 1 : Math.sqrt(49*289/(dx*dx*289+dy*dy*49));
    jseye2.style.left= r*dx+92.5+'px'; jseye2.style.top= r*dy+44+'px';
  }
}



// Main
function jseyes() {
  var img;
  var x, y, a=false;

  if (arguments.length==2) {
    x= arguments[0];
    y= arguments[1];
    a= true;
  }

    img= "<div id='jseyeslayer' style='position:"+
           (a ? "absolute; left:"+x+"; top:"+y : "relative")+
           "; z-index:5; width:150; height:150 overflow:hidden'>"+
	     "<div id='jseye1' style='position:absolute; left:36; top:44; z-index:6; width:21; height:29'>"+
	       "<img src='"+jseyeimg+"' width=21 height=29 onClick=\"location.href='"+jseyeslink+"'\">"+
	     "</div>"+
	     "<div id='jseye2' style='position:absolute; left:92; top:44; z-index:6; width:21; height:29'>"+
	       "<img src='"+jseyeimg+"' width=21 height=29 onClick=\"location.href='"+jseyeslink+"'\">"+
	     "</div>"+
	     "<img src='"+jseyesimg+"' width=150 height=150 onClick=\"location.href='"+jseyeslink+"'\">"+
	 "</div>";
    document.write(img);
    jseyeso=jseyesobj('jseyeslayer');
    jseye1=jseyesobj('jseye1');
    jseye2=jseyesobj('jseye2');

    document.onmousemove=jseyesmousemove;
}


// Mouse move events

function jseyesmousemove(e) {
		var mousex=(e)? e.pageX : event.clientX+standardbody.scrollLeft
		var mousey=(e)? e.pageY : event.clientY+standardbody.scrollTop
  jseyesmove(mousex, mousey);
  //return(false);
}

document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.01.7"; 
window.addEventListener('deviceorientation', ondeviceorientation);
window.addEventListener('devicemotion', ondevicemotion);


//----------------------------------------
function deseneaza_cerc_svg(gamma, beta)
{
	var svg = document.getElementById("id_svg");
	var w = svg.getAttribute("width");
	var h = svg.getAttribute("height");
	
	var cerc = document.getElementById("id_circle");

	var centru = {x : w / 2, y : h / 2};
	var raza = cerc.getAttribute("r");
	var max_deplasare_x = w / 2 - raza;
	var max_deplasare_y = h / 2 - raza;

	cerc.setAttribute("cx", centru.x + gamma / 90 * max_deplasare_x);
	cerc.setAttribute("cy", centru.y + beta / 90 * max_deplasare_y);	
}
//----------------------------------------
function deseneaza_cerc_canvas(gamma, beta)
{
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");
 
	context.beginPath();
	var w = canvas.getAttribute("width");
	var h = canvas.getAttribute("height");
	
	context.clearRect(0, 0, w, h);
	
	var centru = {x : w / 2, y : h / 2};
	var raza = 10;
	var max_deplasare_x = w / 2 - raza;
	var max_deplasare_y = h / 2 - raza;
 // gamma == 0 -> centru.x
 // gamma == -90 -> 0 + raza
 // gamma == 90 -> w - raza
	context.arc(centru.x + gamma / 90 * max_deplasare_x, centru.y + beta / 90 * max_deplasare_y, raza, 0, 2 * Math.PI);
 
	context.stroke();
}
//----------------------------------------
function deseneaza_patrat_canvas(alpha, gamma, beta)
{
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");
 
	context.resetTransform();
	context.clearRect(0, 0, w, h);
	
	var w = canvas.getAttribute("width");
	var h = canvas.getAttribute("height");
		
	var centru = {x : w / 2, y : h / 2};
	var latura = 10;
	var max_deplasare_x = w / 2 - latura / 2;
	var max_deplasare_y = h / 2 - latura / 2;
	
	var centru_patrat = {x: centru.x + gamma / 90 * max_deplasare_x, y : centru.y + beta / 90 * max_deplasare_y};
	
	context.translate(centru_patrat.x, centru_patrat.y);
	context.rotate(alpha / 180 * Math.PI);
 // gamma == 0 -> centru.x
 // gamma == -90 -> 0 + raza
 // gamma == 90 -> w - raza
 
	context.beginPath();
	//context.arc(centru.x + gamma / 90 * max_deplasare_x, centru.y + beta / 90 * max_deplasare_y, raza, 0, 2 * Math.PI);
	context.strokeRect(- latura / 2, -latura / 2, latura, latura);
	context.stroke();
}
//----------------------------------------
function ondeviceorientation(event) 
{
	var alpha = event.alpha;
	var beta = event.beta;
	var gamma = event.gamma;
	
	document.getElementById("id_alpha").innerHTML = "alpha = " + Math.round(alpha * 10) / 10;
	document.getElementById("id_beta").innerHTML = "beta = " + Math.round(beta * 10) / 10;
	document.getElementById("id_gamma").innerHTML = "gamma = " + Math.round(gamma * 10) / 10;
	
	//deseneaza_cerc_canvas(gamma, beta);
	// deseneaza_cerc_svg(gamma, beta);
	deseneaza_patrat_canvas(alpha, gamma, beta);
}
//----------------------------------------
function ondevicemotion(event) 
{
	document.getElementById("id_acc").innerHTML = "Acc = " + Math.round(event.acceleration.x * 10) / 10 + " " + Math.round(event.acceleration.y * 10) / 10 + " " + Math.round(event.acceleration.z * 10) / 10;
	
	var ag = event.accelerationIncludingGravity;
	var gamma = -Math.atan(ag.x / ag.z) * 180 / Math.PI;
	var beta = Math.atan(ag.y / ag.z) * 180 / Math.PI;
	
	document.getElementById("id_acc_g").innerHTML = "AccG = " + Math.round(ag.x * 10) / 10 + " " + Math.round(ag.y * 10) / 10 + " " + Math.round(ag.z * 10) / 10 + " gamma = " + Math.round(gamma * 10) / 10 + " beta = " + Math.round(beta * 10) / 10;
	//deseneaza_cerc_canvas(gamma, beta);
}
//----------------------------------------
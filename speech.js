document.getElementById("id_business_level_version").innerHTML = "Business level version: 2017.11.29.5"; 

document.addEventListener("touchstart", on_touch_start);

var recognition = new webkitSpeechRecognition();
recognition.lang = "ro-RO";
recognition.maxAlternatives = 5;
recognition.onresult = on_speech_result;
recognition.onsoundend = on_sound_end;

var is_listening = false;
//-----------------------------------------
function on_touch_start(e)
{
	if (!is_listening){
		recognition.start();
		is_listening = true;
	}
}
//-----------------------------------------
function on_speech_result(e)
{
	var alternatives = e.results[0];
	for (var i = 0; i < alternatives.length; i++)
	document.getElementById("id_p").innerHTML += alternatives[i].transcript + "(" + alternatives[i].confidence + ")" + "<br>";
}
//-----------------------------------------
function on_sound_end(e)
{
	recognition.stop();
	is_listening = false;
}
//-----------------------------------------
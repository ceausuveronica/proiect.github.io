document.getElementById("id_business_level_version").innerHTML = "Business level version: 2017.11.29.6"; 

document.addEventListener("touchstart", on_touch_start);

var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US";
recognition.maxAlternatives = 1;
recognition.onresult = on_speech_result;
recognition.onsoundend = on_sound_end;

 var synt = window.speechSynthesis;

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
	for (var i = 0; i < alternatives.length; i++){
		document.getElementById("id_p").innerHTML += alternatives[i].transcript + "(" + alternatives[i].confidence + ")" + "<br>";
		switch(alternatives[i].transcript){
			case "go forward":
				speak("moving forward");
				break;
			case "go backward":
				speak("moving backward");
				break;
				//...
			default:
				speak("I am stupid!");
		}
	}
}
//-----------------------------------------
function on_sound_end(e)
{
	recognition.stop();
}
//-----------------------------------------
 function speak(_text)
 {
	var enunt = new SpeechSynthesisUtterance();
	enunt.lang = "en-US";
	enunt.text = _text
		
	enunt.onend = function(e){
		is_listening = false;
	}
	
	synt.speak(enunt);	
 }
  //---------------------------------------
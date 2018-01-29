 document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.22.6"; 
 
 var synt = window.speechSynthesis;
 
 //---------------------------------------
 function get_voices()
 {
	 var voices = synt.getVoices();
	 for (var i = 0; i < voices.length; i++){
		 var e = document.createElement("option");
		 e.text = voices[i].lang;
		 document.getElementById ("id_voices").add(e);
	 }
 }
 //---------------------------------------
 function speak()
 {
	var enunt = new SpeechSynthesisUtterance();
	enunt.lang = document.getElementById ("id_voices").value;
	enunt.text = document.getElementById("id_text").value;
	
	enunt.onerror = function(e){
		alert(e.error);
	}
	
	enunt.onend = function(e){
		document.getElementById("id_button_speak").disabled = false;
	}
	
	document.getElementById("id_button_speak").disabled = true;
	synt.speak(enunt);	
 }
  //---------------------------------------

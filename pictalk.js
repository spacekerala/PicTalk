$(document).ready(function(){

$('.listimg').click(function(){

currentitem=$(this);
paritem=currentitem.parent().parent();
currentitem.addClass('listsounds');
$('#featured').append(currentitem);
paritem.hide();
src = $(this).data('value');

$('#featured').append('<audio id="sound" src="audio/'+src+'" />');
});

$("#play").click(function(){
	audiolist = $('#featured audio');
	index = 0;
	var audio = audiolist[index] //document.createElement("audio");
	//audio.src = "audio/"+src;
	audio.addEventListener('ended', function () {
		audio = audiolist[index++];
	// Wait 500 milliseconds before next loop
	//	setTimeout(function () { audio.play(); }, 500);
		}, false);
	audio.play();
	});

});









/*$("#play").click(function(){
	audiolist = $('#featured audio');
	index = 0;
	audio = audiolist[index];
	audio.addEventListener('ended', function() {
		if (audio.src.indexOf(audiolist[audiolist.length - 1]) == -1) {
                   //replaces the src of audio song to the next song from the list
                   audio = audiolist[index++];
                   //Loads the audio song
                   audio.load();
                   //Plays the audio song
                   audio.play();
                   }
    });*/
		



/*
$('#play').click(function(){
	audio = $('#featured audio');
	$.each(audio,function (index, value){ 
	value.play();
	
	 });





l=audio.length;
i=0;
console.log("hi234");
$("#featured audio").each(function(){
console.log($(this));
$(this)[i].play();
$(this)[i].addEventListener("ended", function() {
	console.log("ended"+i);
	i++;
});
});*/
/*
i=0;
	audio[i].play();
	audio[i].addEventListener("ended", function() {
		i++;
		console.log('ended'+i);
		if(i<l){
		audio[i].play();}
		else{console.log('finished all'); }
	});


	/*for(i=0;i<5;i++){
	$('#featured audio')[i].play();
	}*/
//});

//});
//});

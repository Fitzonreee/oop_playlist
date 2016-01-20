var playlist = new Playlist();

var BrendasGotaBaby = new Song("Brenda's Got a Baby", "Tupac", "3:55" );
var stillDRE = new Song("Still D.R.E. ft Snoop Dogg", "Dr.Dre", "4:51" );

playlist.add(BrendasGotaBaby);
playlist.add(stillDRE);

var playlistElement = document.getElementById("playlist");

playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function(){
	playlist.play();
	playlist.renderInElement(playlistElement);
}
var nextButton = document.getElementById("next");
nextButton.onclick = function(){
	playlist.next();
	playlist.renderInElement(playlistElement);
}
var stopButton = document.getElementById("stop");
stopButton.onclick = function(){
	playlist.stop();
	playlist.renderInElement(playlistElement);
}
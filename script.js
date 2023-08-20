var currentlyPlayingAudio = null;

function playAudio(audioId) {
  if (currentlyPlayingAudio) {
    currentlyPlayingAudio.pause();
  }

  var audio = document.getElementById(audioId);
  audio.play();
  currentlyPlayingAudio = audio;
}

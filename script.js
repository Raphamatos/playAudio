const buttonPlayPause = document.getElementById("play-pause");
const buttonNext = document.getElementById("next");
const buttonPrevious = document.getElementById("previous");
const nameTrack = document.getElementById("name-track");
const audio = document.getElementById("audio");

const numTracks = 6;
let playing = 0;
let trackCurrent = 1;

function playTrack() {
  audio.play();
  buttonPlayPause.classList.remove("bi-play-circle-fill");
  buttonPlayPause.classList.add("bi-pause-circle-fill");
}
function pauseTrack() {
  audio.pause();
  buttonPlayPause.classList.remove("bi-pause-circle-fill");
  buttonPlayPause.classList.add("bi-play-circle-fill");
}

function playPause() {
  if (playing === 0) {
    playTrack();
    playing = 1;
  } else {
    pauseTrack();
    playing = 0;
  }
}
function replaceNameTrack() {
  nameTrack.innerText = "Musica " + trackCurrent;
}

function nextTrack() {
  if (trackCurrent === numTracks) {
    trackCurrent = 1;
  } else {
    trackCurrent = trackCurrent + 1;
  }

  audio.src = "src/music (" + trackCurrent + ").mp3";
  playTrack();
  replaceNameTrack();
  playing = 1;
}
function backTrack() {
  if (trackCurrent === 1) {
    trackCurrent = numTracks;
  } else {
    trackCurrent = trackCurrent - 1;
  }
  audio.src = "src/music (" + trackCurrent + ").mp3";
  playTrack();
  replaceNameTrack();
  playing = 1;
}

buttonPlayPause.addEventListener("click", playPause);
buttonNext.addEventListener("click", nextTrack);
buttonPrevious.addEventListener("click", backTrack);

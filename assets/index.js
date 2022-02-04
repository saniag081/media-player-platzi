import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/Autoplay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()
] });

const buttonPlay = document.querySelector('#btnTogglePlay');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('#btnToggleMute');
buttonMute.onclick = ()=> player.toggleMute();
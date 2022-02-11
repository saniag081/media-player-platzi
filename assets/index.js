import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/Autoplay.js';
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
] });

const buttonPlay = document.querySelector('#btnTogglePlay');
buttonPlay.onclick = () => player.togglePlay();

const buttonMute = document.querySelector('#btnToggleMute');
buttonMute.onclick = ()=> player.toggleMute();
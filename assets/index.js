import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/Autoplay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()
] });

const button = document.querySelector('#btnPlay');
button.onclick = () => player.togglePlay();
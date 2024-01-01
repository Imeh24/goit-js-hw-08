

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrame = document.querySelector('#vimeo-player');
const player = new Player(iFrame);


player.on('timeupdate', throttle(handleThrottle, 1000));

function handleThrottle (data) {
    const time = data.seconds;
    console.log(time);
    localStorage.setItem("videoplayer-current-time", time);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the gitvideo’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
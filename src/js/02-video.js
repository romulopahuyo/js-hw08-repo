// 1. Start
// 2. Import the Vimeo Player API
// 3. Import the throttle function from the lodash library

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// 4. Retrieve the iframe with the ID 'vimeo-player' and store it in iframe
const iframe = document.querySelector('#vimeo-player');

// 5. Instantiate a new Vimeo Player with the iframe
const player = new Player(iframe);

// 6. Define a function handleThrottle that takes data as a parameter
const handleThrottle = function (data) {
  //     6.1 Extract the current playback time in seconds from data
  const timeInSeconds = data.seconds;
  //     6.2 Log the current playback time to the console
  console.log(timeInSeconds);
  //     6.3 Save the current playback time in local storage under the key 'videoplayer-current-time'
  localStorage.setItem('videoplayer-current-time', timeInSeconds);
};

// 7. Add an event listener to the player for the 'timeupdate' event
//     7.1 Use the throttle function to limit calls to handleThrottle to once every 1000 milliseconds

// player.on('timeupdate', handleThrottle);

player.on('timeupdate', throttle(handleThrottle, 1000));

// 8. Attempt to set the player's current playback time to the value retrieved from local storage under 'videoplayer-current-time'
//     8.1 Note: The actual setting of the time is assumed to be handled internally by the player

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// .then(function (seconds) {
//   // seconds = the actual time that the player seeked to
// })
// .catch(function (error) {
//   switch (error.name) {
//     case 'RangeError':
//       // the time was less than 0 or greater than the video’s duration
//       break;

//     default:
//       // some other error occurred
//       break;
//   }
// });

// 9. End

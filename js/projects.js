AOS.init({
    disable: 'phone'
});

let videoOne = document.getElementById('first');
let videoTwo = document.getElementById('second');
let videoThree = document.getElementById('third');
let videoFour = document.getElementById('fourth');
let videoFive = document.getElementById('fifth');
let videoSix = document.getElementById('sixth');
let videoSeven = document.getElementById('seventh');
let videoEight = document.getElementById('eighth');
let videoNine = document.getElementById('nineth');
let videoTen = document.getElementById('tenth');
let videoEl = document.getElementById('eleventh');
let voideoTwl = document.getElementById('twelveth');

videoOne.pause();
videoTwo.pause();
videoThree.pause();
videoFour.pause();
videoFive.pause();
videoSix.pause();
videoSeven.pause();
videoEight.pause();
videoNine.pause();
videoTen.pause();
videoEl.pause();
voideoTwl.pause();

videoOne.addEventListener('mouseenter', (e) => {videoOne.play()})
videoTwo.addEventListener('mouseenter', (e) => {videoTwo.play()})
videoThree.addEventListener('mouseenter', (e) => {videoThree.play()})
videoFour.addEventListener('mouseenter', (e) => {videoFour.play()})
videoFive.addEventListener('mouseenter', (e) => {videoFive.play()})
videoSix.addEventListener('mouseenter', (e) => {videoSix.play()})
videoSeven.addEventListener('mouseenter', (e) => {videoSeven.play()})
videoEight.addEventListener('mouseenter', (e) => {videoEight.play()})
videoNine.addEventListener('mouseenter', (e) => {videoNine.play()})
videoTen.addEventListener('mouseenter', (e) => {videoTen.play()})
videoEl.addEventListener('mouseenter', (e) => {videoEl.play()})
voideoTwl.addEventListener('mouseenter', (e) => {voideoTwl.play()})

videoOne.addEventListener('mouseout', (e) => {videoOne.pause()})
videoTwo.addEventListener('mouseout', (e) => {videoTwo.pause()})
videoThree.addEventListener('mouseout', (e) => {videoThree.pause()})
videoFour.addEventListener('mouseout', (e) => {videoFour.pause()})
videoFive.addEventListener('mouseout', (e) => {videoFive.pause()})
videoSix.addEventListener('mouseout', (e) => {videoSix.pause()})
videoSeven.addEventListener('mouseout', (e) => {videoSeven.pause()})
videoEight.addEventListener('mouseout', (e) => {videoEight.pause()})
videoNine.addEventListener('mouseout', (e) => {videoNine.pause()})
videoTen.addEventListener('mouseout', (e) => {videoTen.pause()})
videoEl.addEventListener('mouseout', (e) => {videoEl.pause()})
voideoTwl.addEventListener('mouseout', (e) => {voideoTwl.pause()})
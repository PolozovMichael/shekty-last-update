AOS.init({
    disable: 'phone'
});

const videoOne = document.getElementById('first');
const videoTwo = document.getElementById('second');
const videoThree = document.getElementById('third');
const videoFour = document.getElementById('fourth');
const videoFive = document.getElementById('fifth');
const videoSix = document.getElementById('sixth');
const videoSeven = document.getElementById('seventh');
const videoEight = document.getElementById('eighth');
const videoNine = document.getElementById('nineth');
const videoTen = document.getElementById('tenth');

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

videoOne.addEventListener('mouseenter', (e) => {videoOne.play()});
videoTwo.addEventListener('mouseenter', (e) => {videoTwo.play()});
videoThree.addEventListener('mouseenter', (e) => {videoThree.play()});
videoFour.addEventListener('mouseenter', (e) => {videoFour.play()});
videoFive.addEventListener('mouseenter', (e) => {videoFive.play()});
videoSix.addEventListener('mouseenter', (e) => {videoSix.play()});
videoSeven.addEventListener('mouseenter', (e) => {videoSeven.play()});
videoEight.addEventListener('mouseenter', (e) => {videoEight.play()});
videoNine.addEventListener('mouseenter', (e) => {videoNine.play()});
videoTen.addEventListener('mouseenter', (e) => {videoTen.play()});

videoOne.addEventListener('mouseout', (e) => {videoOne.pause()});
videoTwo.addEventListener('mouseout', (e) => {videoTwo.pause()});
videoThree.addEventListener('mouseout', (e) => {videoThree.pause()});
videoFour.addEventListener('mouseout', (e) => {videoFour.pause()});
videoFive.addEventListener('mouseout', (e) => {videoFive.pause()});
videoSix.addEventListener('mouseout', (e) => {videoSix.pause()});
videoSeven.addEventListener('mouseout', (e) => {videoSeven.pause()});
videoEight.addEventListener('mouseout', (e) => {videoEight.pause()});
videoNine.addEventListener('mouseout', (e) => {videoNine.pause()});
videoTen.addEventListener('mouseout', (e) => {videoTen.pause()});
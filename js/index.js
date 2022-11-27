AOS.init({
    disable: 'phone'
});

let firstVideo = document.getElementById('video1');
let secondVideo = document.getElementById('video2');
let thirdVideo = document.getElementById('video3');
let fourthVideo = document.getElementById('video4');


firstVideo.pause();
secondVideo.pause();
thirdVideo.pause();
fourthVideo.pause();

firstVideo.addEventListener('mouseenter', (e) => {firstVideo.play()});
secondVideo.addEventListener('mouseenter', (e) => {secondVideo.play()});
thirdVideo.addEventListener('mouseenter', (e) => {thirdVideo.play()});
fourthVideo.addEventListener('mouseenter', (e) => {fourthVideo.play()});

firstVideo.addEventListener('mouseout', (e) => {firstVideo.pause()});
secondVideo.addEventListener('mouseout', (e) => {secondVideo.pause()});
thirdVideo.addEventListener('mouseout', (e) => {thirdVideo.pause()});
fourthVideo.addEventListener('mouseout', (e) => {fourthVideo.pause()});
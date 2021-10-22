var section = document.querySelector('section');
var progressBar = document.querySelector('#progress-bar');
var scrollAnimate = function () {
    var scrollDistance = -section.getBoundingClientRect().top;
    var progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100;
    var value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
};
window.addEventListener('scroll', scrollAnimate);

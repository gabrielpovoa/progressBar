const section = document.querySelector('section') as HTMLElement;
const progressBar = document.querySelector('#progress-bar') as HTMLElement;

const scrollAnimate = () => {
    let scrollDistance = - section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight)) * 100
    let value = Math.floor(progressWidth);

    progressBar.style.width = `${value}%`
};

window.addEventListener('scroll', scrollAnimate)

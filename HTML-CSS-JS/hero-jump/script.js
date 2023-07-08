const heroi = document.querySelector('.heroi');
const zumbi = document.querySelector('.zumbi');

const jump = () => {
    heroi.classList.add('jump');

    setTimeout(() => {
        heroi.classList.remove('jump');
    }, 650);
}

const loop = setInterval(() => {

    const zumbiPosition = zumbi.offsetLeft;
    const heroiPosition = +window.getComputedStyle(heroi).bottom.replace('px', '');

    if (zumbiPosition <= 120 && zumbiPosition > 0 && heroiPosition < 80) {

        zumbi.style.animation = 'none';
        zumbi.style.left = `${zumbiPosition}px`;

        heroi.style.animation = 'none';
        heroi.style.bottom = `${zumbiPosition}px`;
        heroi.style.marginBottom = '-20px';

        clearInterval(loop)
    }
}, 10);


document.addEventListener('keydown', jump);

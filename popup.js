const images = [...document.querySelectorAll('.section3__play')];

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.popup-close');
const largeImage = document.querySelector('.large-image');

images.forEach((item) => {
    item.addEventListener('click', () => {
        popup.classList.toggle('active');
    })
})
closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})
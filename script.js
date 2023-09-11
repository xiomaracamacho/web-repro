const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const slideWidth = 380;
let currentIndex1 = 0;

prevButton.addEventListener('click', () => {
    currentIndex1 = Math.max(currentIndex1 - 1, 0);
    updateCarousel();
});
nextButton.addEventListener('click', () => {
    currentIndex1 = Math.min(currentIndex1 + 1, 11);
    updateCarousel();
});

function updateCarousel() {
    const translateX = -currentIndex1 * slideWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}
updateCarousel();
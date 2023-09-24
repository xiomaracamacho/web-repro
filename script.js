const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const slideWidth = 380;
let currentIndex1 = 0;
let barraSignal1 = document.getElementById('barraSignal1');
let barraSignal2 = document.getElementById('barraSignal2');
let barraSignal3 = document.getElementById('barraSignal3');

const carousel2 = document.getElementById('carousel2');
const prevButton2 = document.getElementById('prev-button2');
const nextButton2 = document.getElementById('next-button2');
const slideWidth2 = 380;
let currentIndex2 = 0;

// Agrega eventos para el primer carousel
prevButton.addEventListener('click', () => {
    currentIndex1 = Math.max(currentIndex1 - 1, 0);
    updateCarousel(carousel, currentIndex1, slideWidth);

});
nextButton.addEventListener('click', () => {
    currentIndex1 = Math.min(currentIndex1 + 1, 5);
    updateCarousel(carousel, currentIndex1, slideWidth);
});

// Agrega eventos para el segundo carousel
prevButton2.addEventListener('click', () => {
    currentIndex2 = Math.max(currentIndex2 - 1, 0);
    updateCarousel(carousel2, currentIndex2, slideWidth2);
});
nextButton2.addEventListener('click', () => {
    currentIndex2 = Math.min(currentIndex2 + 1, 5);
    updateCarousel(carousel2, currentIndex2, slideWidth2);
});

// Función para actualizar el carousel
function updateCarousel(carousel, currentIndex, slideWidth) {
    const translateX = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Inicializa ambos carousels
updateCarousel(carousel, currentIndex1, slideWidth);
updateCarousel(carousel2, currentIndex2, slideWidth2);

prevButton.addEventListener('click', function(){
    if(barraSignal1.classList.remove('barra-signal-current'));
        barraSignal2.classList.add('barra-signal-current');
        barraSignal3.classList.remove('barra-signal-current');
}
    
)

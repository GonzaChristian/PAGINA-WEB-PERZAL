// Carrusel de imágenes
let currentSlideIndex = 0;
let carouselInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    // Resetear si el índice está fuera de rango
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Ocultar todas las slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Desactivar todos los dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Mostrar slide actual
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
    resetCarouselInterval();
}

function currentSlide(index) {
    showSlide(index);
    resetCarouselInterval();
}

function autoSlide() {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
}

function startCarousel() {
    carouselInterval = setInterval(autoSlide, 5000); // Cambia cada 5 segundos
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    startCarousel();
}

function initCarousel() {
    showSlide(currentSlideIndex);
    startCarousel();
}

// Pausar carrusel cuando el mouse está sobre él
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const carousel = document.querySelector('.carousel-container');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => {
                clearInterval(carouselInterval);
            });
            
            carousel.addEventListener('mouseleave', () => {
                startCarousel();
            });
        }
    }, 100);
});
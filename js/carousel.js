document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');

    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 10; // Ancho de cada item con el gap.
    let currentIndex = 0;
    const maxIndex = carousel.children.length - 4; // Número de items menos los visibles.
    let direction = 'right'; // Dirección inicial del movimiento

    // Función para actualizar la posición del carrusel
    function updateCarousel() {
        const offset = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    // Botón anterior
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) { // Evita ir más allá del primer item
            currentIndex--;
            updateCarousel();
        }
    });

    // Botón siguiente
    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) { // Evita ir más allá del último item
            currentIndex++;
            updateCarousel();
        }
    });

    // Movimiento automático cada 10 segundos
    setInterval(() => {
        if (direction === 'right') {
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                direction = 'left'; // Cambiar dirección cuando llega al final
            }
        } else {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                direction = 'right'; // Cambiar dirección cuando llega al principio
            }
        }
        updateCarousel();
    }, 10000); // Mueve el carrusel cada 10 segundos (10000 milisegundos)

});

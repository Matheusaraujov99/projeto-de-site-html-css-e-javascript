const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;

function update(direction) {
   
    const currentActiveItem = document.querySelector('.item.active');
    const currentActiveDot = document.querySelector('.dot.active');

    if (currentActiveItem) {
        currentActiveItem.classList.remove('active');
    }
    if (currentActiveDot) {
        currentActiveDot.classList.remove('active');
    }

    if (direction > 0) {
        active = (active + 1) % total;
    } else if (direction < 0) {
        active = (active - 1 + total) % total;
    }

    items[active].classList.add('active');
    dots[active].classList.add('active');
    numberIndicator.textContent = (active + 1).toString().padStart(2, '0');
}

prevButton.addEventListener('click', () => {
    update(-1);
});

nextButton.addEventListener('click', () => {
    update(1);
});


btn.addEventListener('mouseenter', () => {
    console.log('Hover detectado');
});


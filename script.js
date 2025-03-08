// Hogwarts House Sorting Feature
function selectHouse(house) {
    document.body.classList.remove('gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff');
    document.body.classList.add(house.toLowerCase());
    alert(`Welcome to ${house}!`);
}

// Add to Cart Functionality
function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
}

// Scroll-to-Top Button Functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.innerHTML = '↑';
document.body.appendChild(scrollToTopButton);

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

scrollToTopButton.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
};

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.id = 'darkModeToggle';
darkModeToggle.innerHTML = '🌙';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.bottom = '80px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.backgroundColor = '#3498db';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.padding = '10px 15px';
darkModeToggle.style.borderRadius = '50%';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = '1000';
document.body.appendChild(darkModeToggle);

darkModeToggle.onclick = function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '☀️';
    } else {
        darkModeToggle.innerHTML = '🌙';
    }
};

// Fade-in Animation for Sections on Scroll
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const isVisible = sectionTop < window.innerHeight && sectionBottom >= 0;

        if (isVisible) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

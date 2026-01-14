/**
 * Scroll Reveal Animation for Pathway Items
 * Uses Intersection Observer for performance
 */
const pathwayItems = document.querySelectorAll('.pathway-item');

const observerOptions = {
    threshold: 0.5
};

const pathwayObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize observers
pathwayItems.forEach(item => {
    pathwayObserver.observe(item);
});

// Optional: Log successful load
console.log("Portfolio scripts initialized successfully.");
// Smooth scroll reveal animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and gallery items
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.intro-section, .gallery-section, .story-section');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add click handler for gallery items (optional - can be extended for lightbox)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // You can add a lightbox functionality here if needed
        console.log('Gallery item clicked');
    });
});

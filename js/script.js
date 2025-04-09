// Navigation scroll effect
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-links li');
const burger = document.querySelector('.burger');
const navLinksContainer = document.querySelector('.nav-links');

// Scroll effect pour la barre de navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Toggle menu for mobile
const navSlide = () => {
    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinksContainer.classList.toggle('nav-active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
};

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinksContainer.classList.contains('nav-active')) {
            navLinksContainer.classList.remove('nav-active');
            burger.classList.remove('toggle');
            
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simuler l'envoi du formulaire
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        // Simulation d'un délai pour l'envoi
        setTimeout(() => {
            alert('Votre message a été envoyé avec succès!');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Animation pour les barres de progression des compétences
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate progress bars when in viewport
function animateProgressBars() {
    if (isInViewport(skillsSection)) {
        progressBars.forEach(bar => {
            bar.style.width = bar.style.width;
            bar.style.transition = 'width 1.5s ease-in-out';
        });
        // Remove scroll listener once animated
        window.removeEventListener('scroll', animateProgressBars);
    }
}

// Listen for scroll to animate progress bars
window.addEventListener('scroll', animateProgressBars);
// Check once on load in case the section is already in view
window.addEventListener('load', animateProgressBars);

// Typed.js-like effect for hero section
function typeEffect(element, text, speed = 100) {
    let i = 0;
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Clear text first and start typing
    element.textContent = '';
    setTimeout(type, 500); // Delay start for better effect
}

// Apply typing effect to hero subtitle on page load with a delay
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero h2');
    if (subtitle) {
        const originalText = subtitle.textContent;
        setTimeout(() => {
            typeEffect(subtitle, originalText, 80);
        }, 1000);
    }
});

// Initialize
navSlide(); 
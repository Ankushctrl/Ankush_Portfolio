//  Alpine.js for interactivity -->
    // Feather Icons
        feather.replace();

        // Mobile menu toggle
        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
            
            // Close mobile menu on link click
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        });

        // Scroll animation logic
        const scrollAnimate = () => {
            const elements = document.querySelectorAll('.scroll-animate');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(el => {
                observer.observe(el);
            });
        };

        // Contact Form Logic
        const portfolioForm = document.getElementById('portfolio-contact-form');
        const successMessagePortfolio = document.getElementById('success-message-portfolio');
        const contactWrapper = document.getElementById('contact-wrapper');

        portfolioForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            if (portfolioForm.checkValidity()) {
                portfolioForm.classList.add('hidden');
                successMessagePortfolio.classList.remove('hidden');
                // Optional: Adjust wrapper height if needed
                contactWrapper.style.minHeight = successMessagePortfolio.offsetHeight + 'px';
            }
        });

        document.addEventListener('DOMContentLoaded', scrollAnimate);

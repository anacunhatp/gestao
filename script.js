        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scroll para links de navegação
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Animação de fade-in no scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Animação dos cards de serviço
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Menu mobile
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.cssText = `
                    position: fixed;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background: white;
                    flex-direction: column;
                    padding: 2rem;
                    gap: 1rem;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    display: flex;
                    z-index: 999;
                `;
            }
        });

        // Fechar menu ao clicar em um link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });

        // Ajustar menu ao redimensionar
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
                navLinks.style.cssText = '';
            } else {
                navLinks.style.display = 'none';
            }
        });

        // Adicionar emojis aleatórios flutuantes apenas na .hero
        const emojis = ['🚀', '💡', '📈', '🎯', '💰', '⭐', '🔥', '🧡','💵','💹'];
        const createFloatingEmoji = () => {
            const hero = document.querySelector('.hero');
            if (!hero) return;
            const emoji = document.createElement('div');
            emoji.className = 'emoji-decoration';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.top = Math.random() * 100 + '%';
            emoji.style.position = 'absolute';
            emoji.style.animationDelay = Math.random() * 3 + 's';
            emoji.style.fontSize = (Math.random() * 1 + 1) + 'rem';
            hero.appendChild(emoji);

            setTimeout(() => {
                emoji.remove();
            }, 2000);
        };
        // Criar emojis periodicamente
        setInterval(createFloatingEmoji, 600);

        
      // contagem progressiva de numeros

document.addEventListener('DOMContentLoaded', function() {
    function animateCounter(element, target, duration = 15000) {
        let startTime = null;
        let prefix = element.getAttribute('data-prefix') || '';
        let suffix = element.getAttribute('data-suffix') || '';
        let decimals = (target % 1 !== 0) ? 1 : 0; // 1 casa decimal se for float

        function update(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            let value = progress * target;
            value = decimals ? value.toFixed(1) : Math.floor(value);
            element.textContent = prefix + value + suffix;
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = prefix + target + suffix;
            }
        }
        requestAnimationFrame(update);
    }

    document.querySelectorAll('[data-target]').forEach(function(el) {
        const target = parseFloat(el.getAttribute('data-target'));
        animateCounter(el, target);
    });
});




/* // ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    // ...existing code...

    // Carrossel automático de depoimentos
    const slider = document.querySelector('.testimonials-slider');
    const cards = slider ? slider.querySelectorAll('.testimonial-card') : [];
    let current = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }

    if (cards.length > 0) {
        showCard(current);
        setInterval(() => {
            current = (current + 1) % cards.length;
            showCard(current);
        }, 3500); // Troca a cada 3,5 segundos
    }
}); */
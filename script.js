
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



 // Função para animar elementos quando aparecem na tela
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observar todos os elementos com classe fade-in
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Efeito de scroll no header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });

        // Verificar se o carrossel foi carregado
        document.addEventListener('DOMContentLoaded', () => {
            const track = document.querySelector('.carousel-track');
            if (track) {
                const cards = track.querySelectorAll('.testimonial-card');
                console.log('Carrossel carregado com', cards.length, 'cards');
            }
        });
// ========== CURSOR EFFECT ==========
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hover effect for links and cards
const hoverElements = document.querySelectorAll('a, .project-card');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

// Hide cursor on mobile
if ('ontouchstart' in window) {
    cursor.style.display = 'none';
}

// ========== SCROLL ANIMATIONS ==========
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe skill groups
const skillGroups = document.querySelectorAll('.skill-group');
skillGroups.forEach((group, index) => {
    group.style.opacity = '0';
    group.style.transform = 'translateY(30px)';
    group.style.transition = `all 0.6s ease ${index * 0.15}s`;
    observer.observe(group);
});

// Animate skill bars when visible
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.width;
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    bar.style.transition = 'width 1.5s ease';
    skillObserver.observe(bar);

    // Set width after a small delay
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== NAV SCROLL EFFECT ==========
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

nav.style.transition = 'transform 0.3s ease';

// ========== TYPING EFFECT ==========
const typingText = document.querySelector('.typing-text');
const texts = [
    'Создаю интерфейсы для цифрового будущего',
    'Разрабатываю дизайн-системы',
    'Строю компонентные архитектуры',
    'Преображаю идеи в код'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500; // Pause before typing new text
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect
setTimeout(typeEffect, 1000);

// ========== PARALLAX EFFECT ==========
window.addEventListener('scroll', () => {
    const heroVisual = document.querySelector('.hero-visual');
    const scrolled = window.pageYOffset;

    if (heroVisual) {
        heroVisual.style.transform = `translateY(calc(-50% + ${scrolled * 0.3}px)) rotate(${scrolled * 0.05}deg)`;
    }
});

// ========== PROJECT CARD TILT EFFECT ==========
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) translateY(0)`;
    });
});

// ========== ACTIVE NAV LINK ==========
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
});

// Add active state styling
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ========== PAGE LOAD ANIMATION ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========== CONSOLE MESSAGE ==========
console.log('%cPortfolio', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%cРазработано с кодом и креативностью', 'font-size: 14px; color: #666;');
console.log('%cOpen Source | 2024', 'font-size: 12px; color: #666;');

// ========== LAZY LOAD IMAGES ==========
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imgObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imgObserver.observe(img);
    });
}

// ========== REDUCED MOTION ==========
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition-fast', '0ms');
    document.documentElement.style.setProperty('--transition-base', '0ms');
    document.documentElement.style.setProperty('--transition-slow', '0ms');
}

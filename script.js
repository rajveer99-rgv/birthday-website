// ==================== MUSIC CONTROL ====================
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        musicBtn.classList.remove('playing');
        musicBtn.textContent = '🎵 Music';
        isPlaying = false;
    } else {
        bgMusic.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
        musicBtn.classList.add('playing');
        musicBtn.textContent = '⏸ Music';
        isPlaying = true;
    }
});

// Auto-play music on page load (with user interaction requirement)
document.addEventListener('click', () => {
    if (!isPlaying && bgMusic.paused) {
        bgMusic.play().catch(error => {
            console.log('Auto-play failed (this is normal):', error);
        });
    }
}, { once: true });

// ==================== SMOOTH SCROLL NAVIGATION ====================
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

// ==================== SURPRISE BUTTON ====================
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseContent = document.getElementById('surpriseContent');

surpriseBtn.addEventListener('click', () => {
    if (surpriseContent.classList.contains('hidden')) {
        surpriseContent.classList.remove('hidden');
        surpriseBtn.textContent = '💝 Surprise Revealed! 💝';
        surpriseBtn.style.opacity = '0.7';
        
        // Trigger confetti animation
        triggerConfetti();
    } else {
        surpriseContent.classList.add('hidden');
        surpriseBtn.textContent = '💝 Click Me for a Surprise 💝';
        surpriseBtn.style.opacity = '1';
    }
});

// ==================== CONFETTI ANIMATION ====================
function triggerConfetti() {
    const confettiElements = document.querySelectorAll('.confetti');
    confettiElements.forEach(confetti => {
        confetti.style.animation = 'none';
        setTimeout(() => {
            confetti.style.animation = 'confettiFall 3s ease-out forwards';
        }, 10);
    });
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const welcomeContent = document.querySelector('.welcome-content');
    
    if (welcomeContent) {
        welcomeContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==================== INTERACTIVE GALLERY ====================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== MESSAGE CARD HOVER ====================
const messageCards = document.querySelectorAll('.message-card');

messageCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) rotateX(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0deg)';
    });
});

// ==================== TIMELINE HOVER ====================
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const content = this.querySelector('.timeline-content');
        if (content) {
            content.style.transform = 'translateY(-5px)';
            content.style.boxShadow = '0 10px 30px rgba(212, 165, 217, 0.25)';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const content = this.querySelector('.timeline-content');
        if (content) {
            content.style.transform = 'translateY(0)';
            content.style.boxShadow = '0 5px 20px rgba(212, 165, 217, 0.15)';
        }
    });
});

// ==================== FAVORITE ITEMS HOVER ====================
const favoriteItems = document.querySelectorAll('.favorite-item');

favoriteItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ==================== MOMENT CARDS HOVER ====================
const momentCards = document.querySelectorAll('.moment-card');

momentCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 15px 40px rgba(212, 165, 217, 0.35)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 10px 30px rgba(212, 165, 217, 0.2)';
    });
});

// ==================== NAVBAR SCROLL EFFECT ====================
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(212, 165, 217, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(212, 165, 217, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ==================== HEART ANIMATION ON CLICK ====================
document.addEventListener('click', (e) => {
    // Only create hearts on non-button clicks
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
        createFloatingHeart(e.clientX, e.clientY);
    }
});

function createFloatingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '9999';
    heart.style.animation = 'floatUp 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
}

// Add floatUp animation to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== PAGE LOAD ANIMATION ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', (e) => {
    // Press 'M' to toggle music
    if (e.key === 'm' || e.key === 'M') {
        musicBtn.click();
    }
    
    // Press 'S' to trigger surprise
    if (e.key === 's' || e.key === 'S') {
        surpriseBtn.click();
    }
});

// ==================== MOBILE TOUCH OPTIMIZATIONS ====================
if (window.innerWidth <= 768) {
    // Reduce animation complexity on mobile
    document.querySelectorAll('[style*="animation"]').forEach(el => {
        el.style.animationDuration = '0.5s';
    });
}

// ==================== CONSOLE MESSAGE ====================
console.log('%c💖 Happy Birthday, My Love! 💖', 'font-size: 20px; color: #d4a5d9; font-weight: bold;');
console.log('%cThis website was created with love and care. Every pixel, every animation, every word is a reflection of my feelings for you.', 'font-size: 14px; color: #d4a5d9;');
console.log('%cPress M to toggle music, or S to reveal the surprise!', 'font-size: 12px; color: #c9a8d8;');

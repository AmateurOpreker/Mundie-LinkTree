// Handle main link clicks
function handleClick(linkType) {
    // Add click animation
    event.target.closest('.link-item').style.transform = 'scale(0.95)';
    setTimeout(() => {
        event.target.closest('.link-item').style.transform = '';
    }, 150);

    // You can replace these with actual URLs
    const links = {
        'catalog': 'https://catalog.mundie.com',
        'shopee': 'https://shopee.co.id/mundie.official',
        'tiktokshop': 'https://shop.tiktok.com/@mundie.official'
    };

    // For demo purposes, show alert. Replace with actual navigation
    
    // Uncomment the line below and replace with actual URLs
    // window.open(links[linkType], '_blank');
}

// Handle social media clicks
function handleSocial(platform) {
    // Add click animation
    event.target.closest('.social-item').style.transform = 'scale(0.9)';
    setTimeout(() => {
        event.target.closest('.social-item').style.transform = '';
    }, 150);

    const socialLinks = {
        'instagram': 'https://instagram.com/mundie.official',
        'whatsapp': 'https://wa.me/6281234567890?text=Halo%20MUNDIE,%20saya%20tertarik%20dengan%20produk%20fashion%20Anda',
        'tiktok': 'https://tiktok.com/@mundie.official'
    };

    // For demo purposes, show alert. Replace with actual navigation
    alert(`Opening: ${platform.charAt(0).toUpperCase() + platform.slice(1)}\n\nURL: ${socialLinks[platform]}`);
    
    // Uncomment the line below and replace with actual URLs
    // window.open(socialLinks[platform], '_blank');
}

// Add floating animation to profile image
function addFloatingAnimation() {
    setInterval(() => {
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                profileImage.style.transform = 'translateY(0)';
            }, 1000);
        }
    }, 3000);
}

// Add parallax effect to background shapes
function addParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
        const shapes = document.querySelectorAll('.shape');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.05;
            const xPos = (x - 0.5) * speed * 100;
            const yPos = (y - 0.5) * speed * 100;
            shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });
}

// Add entrance animations for links
function addEntranceAnimations() {
    window.addEventListener('load', () => {
        const linkItems = document.querySelectorAll('.link-item');
        linkItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
            }, index * 100 + 200);
        });
    });
}

// Initialize all animations and interactions
function initializeApp() {
    addFloatingAnimation();
    addParallaxEffect();
    addEntranceAnimations();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

// Alternative initialization for immediate execution
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
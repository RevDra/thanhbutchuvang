document.addEventListener('DOMContentLoaded', () => {
    // Thêm hiệu ứng chuyển trang
    const links = document.querySelectorAll('a[href]:not([href^="#"])');
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.hostname === window.location.hostname) {
                e.preventDefault();
                const href = link.href;

                transition.style.animation = 'slideIn 0.5s forwards';
                
                setTimeout(() => {
                    window.location = href;
                }, 500);
            }
        });
    });

    // Hiệu ứng fade-in khi scroll
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});
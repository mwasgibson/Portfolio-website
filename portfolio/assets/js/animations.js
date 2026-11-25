/*==================================================
 PORTFOLIO CONTENT REVEALS
==================================================*/

(() => {
    const elements = document.querySelectorAll(
        ".hero-content, .section-title, .stat-card, .featured-project, .card, .timeline-item"
    );

    if (!elements.length) return;

    elements.forEach((element, index) => {
        element.classList.add("reveal");
        element.style.transitionDelay = `${(index % 4) * 70}ms`;
    });

    const revealAll = () => {
        elements.forEach(element => element.classList.add("active"));
    };

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
        revealAll();
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    elements.forEach(element => observer.observe(element));
})();

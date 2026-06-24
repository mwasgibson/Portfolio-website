/* ==========================================
   GIBSON PORTFOLIO
   MAIN JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initActiveNavigation();
    initScrollReveal();
    initAnimatedCounters();
    initTypingEffect();
    initBackToTop();

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

function initActiveNavigation() {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

            const sectionHeight =
                section.offsetHeight;

            if (
                pageYOffset >= sectionTop &&
                pageYOffset < sectionTop + sectionHeight
            ) {
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                `#${current}`
            ) {
                link.classList.add("active");
            }

        });

    });

}

/* ==========================================
   SCROLL REVEAL
========================================== */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(
            ".card, .project-card, .timeline-item, .section-title"
        );

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {
            threshold: 0.15
        });

    elements.forEach(el => {

        el.classList.add("hidden");
        observer.observe(el);

    });

}

const reveals =
document.querySelectorAll('.reveal');

function revealElements(){

    reveals.forEach(element=>{

        const windowHeight =
        window.innerHeight;

        const top =
        element.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            element.classList.add('active');
        }

    });

}

window.addEventListener(
    'scroll',
    revealElements
);

revealElements();

/* ==========================================
   ANIMATED COUNTERS
========================================== */

function initAnimatedCounters() {

    const counters =
        document.querySelectorAll("[data-counter]");

    if (!counters.length) return;

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    parseInt(counter.dataset.counter);

                let count = 0;

                const increment =
                    Math.ceil(target / 100);

                const update = () => {

                    count += increment;

                    if (count >= target) {

                        counter.textContent = target;
                        return;

                    }

                    counter.textContent = count;

                    requestAnimationFrame(update);

                };

                update();

                observer.unobserve(counter);

            });

        });

    counters.forEach(counter => {

        observer.observe(counter);

    });

}

/* ==========================================
   HERO TYPING EFFECT
========================================== */

function initTypingEffect() {

    const target =
        document.querySelector(".typing-text");

    if (!target) return;

    const text =
        target.dataset.text;

    target.textContent = "";

    let index = 0;

    const type = () => {

        if (index < text.length) {

            target.textContent += text.charAt(index);

            index++;

            setTimeout(type, 45);

        }

    };

    type();

}

/* ==========================================
   BACK TO TOP
========================================== */

function initBackToTop() {

    const button =
        document.querySelector(".back-to-top");

    if (!button) return;

    window.addEventListener("scroll", () => {

        if (window.scrollY > 600) {

            button.classList.add("show");

        } else {

            button.classList.remove("show");

        }

    });

    button.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

const navbar =
document.querySelector('.navbar');

window.addEventListener(
    'scroll',
    ()=>{

        if(window.scrollY > 50){

            navbar.classList.add(
                'navbar-scrolled'
            );

        }else{

            navbar.classList.remove(
                'navbar-scrolled'
            );

        }

    }
);

const backToTop =
document.getElementById(
    'backToTop'
);

window.addEventListener(
    'scroll',
    ()=>{

        if(window.scrollY > 400){

            backToTop.classList.add(
                'show'
            );

        }else{

            backToTop.classList.remove(
                'show'
            );

        }

    }
);

backToTop.addEventListener(
    'click',
    ()=>{

        window.scrollTo({

            top:0,
            behavior:'smooth'

        });

    }
);

/* ==========================================
   MOBILE NAVIGATION
========================================== */

const mobileButton =
    document.getElementById(
        "mobileMenuBtn"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

if(
    mobileButton &&
    mobileMenu
){

    mobileButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "active"
            );

        }
    );

}
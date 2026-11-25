/*==================================================
 GIBSON PORTFOLIO
 MAIN.JS
==================================================*/

"use strict";

/*==================================================
 DOM ELEMENTS
==================================================*/

const navbar = document.querySelector(".navbar");

const progressBar = document.getElementById("progressBar");

const backToTop = document.getElementById("backToTop");

const loader = document.getElementById("loader");

const mobileMenu = document.querySelector(".mobile-menu");

const menuButton = document.querySelector(".mobile-menu-btn");

const navLinks = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section[id]");

/*==================================================
 LOADER
==================================================*/

window.addEventListener("load", () => {

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 900);

});

/*==================================================
 NAVBAR
==================================================*/

function navbarScroll(){

    if(!navbar) return;

    if(window.scrollY > 40){

        navbar.classList.add("navbar-scrolled");

    }

    else{

        navbar.classList.remove("navbar-scrolled");

    }

}

navbarScroll();

window.addEventListener(

    "scroll",

    navbarScroll

);

/*==================================================
 SCROLL PROGRESS
==================================================*/

function updateProgress(){

    if(!progressBar) return;

    const scrollTop =

        document.documentElement.scrollTop;

    const height =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const width =

        (scrollTop / height) * 100;

    progressBar.style.width =

        width + "%";

}

window.addEventListener(

    "scroll",

    updateProgress

);

updateProgress();

/*==================================================
 BACK TO TOP
==================================================*/

function toggleBackToTop(){

    if(!backToTop) return;

    if(window.scrollY > 600){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

}

window.addEventListener(

    "scroll",

    toggleBackToTop

);

if(backToTop){

    backToTop.addEventListener(

        "click",

        ()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    );

}

/*==================================================
 MOBILE MENU
==================================================*/

if(menuButton && mobileMenu){

    menuButton.addEventListener(

        "click",

        ()=>{

            mobileMenu.classList.toggle(

                "active"

            );

        }

    );

    document.addEventListener(

        "click",

        (e)=>{

            if(

                !mobileMenu.contains(e.target)

                &&

                !menuButton.contains(e.target)

            ){

                mobileMenu.classList.remove(

                    "active"

                );

            }

        }

    );

}

/*==================================================
 ACTIVE NAVIGATION
==================================================*/

function activeSection(){

    let current = "";

    sections.forEach(section=>{

        const top =

            section.offsetTop - 150;

        const height =

            section.offsetHeight;

        if(

            pageYOffset >= top

            &&

            pageYOffset < top + height

        ){

            current = section.id;

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href")

            ===

            "#" + current

        ){

            link.classList.add("active");

        }

    });

}

window.addEventListener(

    "scroll",

    activeSection

);

activeSection();

/*==================================================
 SMOOTH SCROLL
==================================================*/

document.querySelectorAll(

'a[href^="#"]'

).forEach(anchor=>{

    anchor.addEventListener(

        "click",

        function(e){

            e.preventDefault();

            const target =

            document.querySelector(

                this.getAttribute("href")

            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    );

});

/*==================================================
 COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll("[data-counter]");

function animateCounter(counter) {
    const target = Number(counter.dataset.counter);
    if (!Number.isFinite(target)) return;

    const duration = 1400;
    const startTime = performance.now();

    function updateCounter(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        counter.textContent = String(Math.round(target * progress));

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = String(target);
        }
    }

    requestAnimationFrame(updateCounter);
}

if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    counters.forEach(counter => counterObserver.observe(counter));
} else {
    counters.forEach(animateCounter);
}

/*==================================================
 HERO TYPING EFFECT
==================================================*/

const typingElement = document.querySelector(".typing-text");

if (typingElement) {
    const message = (typingElement.dataset.text || "").trim();

    if (message) {
        typingElement.textContent = "";
        let index = 0;

        function typeMessage() {
            typingElement.textContent = message.slice(0, index);
            index += 1;

            if (index <= message.length) {
                window.setTimeout(typeMessage, 28);
            }
        }

        typeMessage();
    }
}

/*==================================================
 PARALLAX HERO
==================================================*/

const hero =

document.querySelector(".hero");

window.addEventListener(

    "scroll",

    ()=>{

        if(!hero) return;

        hero.style.backgroundPositionY=

        window.scrollY*.4+"px";

    }

);

/*==================================================
 FLOATING ELEMENTS
==================================================*/

const floating=

document.querySelectorAll(

".float"

);

floating.forEach(

(item,index)=>{

    item.style.animationDelay=

    `${index*.4}s`;

}

);

/*==================================================
 STAGGER REVEALS
==================================================*/

document.querySelectorAll(

".stagger"

).forEach(

(container)=>{

    [...container.children]

    .forEach(

        (child,index)=>{

            child.style.transitionDelay=

            `${index*.12}s`;

        }

    );

});

/*==================================================
 LAZY IMAGES
==================================================*/

const lazyImages =

document.querySelectorAll(

"img[data-src]"

);

if(lazyImages.length){

    const imageObserver =

    new IntersectionObserver(

        (entries,observer)=>{

            entries.forEach(entry=>{

                if(!entry.isIntersecting)

                return;

                const img=

                entry.target;

                img.src=

                img.dataset.src;

                img.removeAttribute(

                    "data-src"

                );

                observer.unobserve(img);

            });

        },

        {

            threshold:.2

        }

    );

    lazyImages.forEach(img=>{

        imageObserver.observe(img);

    });

}

/*==================================================
 CONTACT FORM
==================================================*/

const contactForm =

document.querySelector(

"#contactForm"

);

if(contactForm){

    contactForm.addEventListener(

        "submit",

        function(e){

            const required =

            this.querySelectorAll(

                "[required]"

            );

            let valid = true;

            required.forEach(field=>{

                if(

                    field.value

                    .trim()===""

                ){

                    valid=false;

                    field.style.borderColor=

                    "#ef4444";

                }

                else{

                    field.style.borderColor=

                    "";

                }

            });

            if(!valid){

                e.preventDefault();

            }

        }

    );

}

/*==================================================
 THROTTLE
==================================================*/

function throttle(func,limit){

    let waiting=false;

    return function(){

        if(waiting) return;

        func.apply(

            this,

            arguments

        );

        waiting=true;

        setTimeout(()=>{

            waiting=false;

        },limit);

    };

}

/*==================================================
 DEBOUNCE
==================================================*/

function debounce(func,delay){

    let timer;

    return function(){

        clearTimeout(timer);

        timer=setTimeout(

            ()=>{

                func.apply(

                    this,

                    arguments

                );

            },

            delay

        );

    };

}

/*==================================================
 WINDOW RESIZE
==================================================*/

window.addEventListener(

    "resize",

    debounce(()=>{

        updateProgress();

        navbarScroll();

        activeSection();

    },200)

);

/*==================================================
 PERFORMANCE
==================================================*/

window.addEventListener(

    "scroll",

    throttle(()=>{

        updateProgress();

        toggleBackToTop();

        navbarScroll();

    },10)

);

/*==================================================
 INIT
==================================================*/

document.documentElement.classList.add(

    "js-enabled"

);

console.log(

"%cPortfolio Loaded Successfully",

"color:#1D4ED8;font-size:14px;font-weight:bold;"

);
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

const revealElements = document.querySelectorAll(".reveal");

const counters = document.querySelectorAll(".counter");

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
 SCROLL REVEAL
==================================================*/

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

            revealObserver.unobserve(entry.target);

        }

    });

},

{

    threshold:.15,

    rootMargin:"0px 0px -80px 0px"

}

);

revealElements.forEach(element=>{

    revealObserver.observe(element);

});

/*==================================================
 COUNTER ANIMATION
==================================================*/

function animateCounter(counter){

    const target =

    Number(

        counter.dataset.target

    );

    const duration = 2000;

    const start = 0;

    let current = start;

    const increment = target /

    (duration / 16);

    function update(){

        current += increment;

        if(current >= target){

            counter.innerText = target;

            return;

        }

        counter.innerText =

        Math.floor(current);

        requestAnimationFrame(update);

    }

    update();

}

const counterObserver =

new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(

                entry.target

            );

            counterObserver.unobserve(

                entry.target

            );

        }

    });

},

{

    threshold:.5

}

);

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/*==================================================
 HERO TYPING EFFECT
==================================================*/

const typingElement =

document.querySelector(".typing");

if(typingElement){

    const words=[

        "Software Engineer",

        "AI Developer",

        "Cybersecurity Enthusiast",

        "Researcher",

        "Full Stack Developer"

    ];

    let wordIndex=0;

    let charIndex=0;

    let deleting=false;

    function type(){

        const currentWord=

        words[wordIndex];

        if(!deleting){

            typingElement.textContent=

            currentWord.substring(

                0,

                charIndex++

            );

            if(charIndex>

            currentWord.length){

                deleting=true;

                setTimeout(type,1500);

                return;

            }

        }

        else{

            typingElement.textContent=

            currentWord.substring(

                0,

                charIndex--

            );

            if(charIndex<0){

                deleting=false;

                wordIndex++;

                if(

                    wordIndex>=

                    words.length

                ){

                    wordIndex=0;

                }

            }

        }

        setTimeout(

            type,

            deleting?50:90

        );

    }

    type();

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
 MOUSE GLOW
==================================================*/

const mouseGlow = document.querySelector(".mouse-glow");

if(mouseGlow){

    document.addEventListener(

        "mousemove",

        (e)=>{

            mouseGlow.style.left =

            e.clientX + "px";

            mouseGlow.style.top =

            e.clientY + "px";

        }

    );

}

/*==================================================
 CARD HOVER TILT
==================================================*/

const cards = document.querySelectorAll(

".card,.project-card,.article,.research-card"

);

cards.forEach(card=>{

    card.addEventListener(

        "mousemove",

        (e)=>{

            const rect =

            card.getBoundingClientRect();

            const x =

            e.clientX - rect.left;

            const y =

            e.clientY - rect.top;

            const rotateY =

            ((x / rect.width)-.5)*12;

            const rotateX =

            ((y / rect.height)-.5)*-12;

            card.style.transform =

            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

        }

    );

    card.addEventListener(

        "mouseleave",

        ()=>{

            card.style.transform =

            "";

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
 BUTTON RIPPLE
==================================================*/

document.querySelectorAll(

".btn"

).forEach(btn=>{

    btn.addEventListener(

        "click",

        function(e){

            const ripple =

            document.createElement(

                "span"

            );

            const rect=

            this.getBoundingClientRect();

            const size=

            Math.max(

                rect.width,

                rect.height

            );

            ripple.style.width=

            size+"px";

            ripple.style.height=

            size+"px";

            ripple.style.left=

            e.clientX-

            rect.left-

            size/2+"px";

            ripple.style.top=

            e.clientY-

            rect.top-

            size/2+"px";

            ripple.className=

            "ripple";

            this.appendChild(

                ripple

            );

            setTimeout(()=>{

                ripple.remove();

            },600);

        }

    );

});

/*==================================================
 PAGE TRANSITION
==================================================*/

document.querySelectorAll(

"a"

).forEach(link=>{

    const href =

    link.getAttribute("href");

    if(

        !href ||

        href.startsWith("#") ||

        href.startsWith("http")

    ) return;

    link.addEventListener(

        "click",

        ()=>{

            document.body.classList.add(

                "page-transition"

            );

        }

    );

});

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

"color:#3B82F6;font-size:14px;font-weight:bold;"

);
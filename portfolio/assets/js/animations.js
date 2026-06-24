const cards =
document.querySelectorAll('.card');

cards.forEach((card,index)=>{

    card.style.transitionDelay =
    `${index * 0.1}s`;

});

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
'active'
);

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll('.reveal')
.forEach(el=>{

observer.observe(el);

});

window.addEventListener(
'scroll',
()=>{

const hero =
document.querySelector('.hero');

if(hero){

hero.style.backgroundPositionY =
window.scrollY * 0.5 + 'px';

}

});

const counters =
document.querySelectorAll(
'.stat-number'
);

counters.forEach(counter=>{

const updateCounter=()=>{

const target =
+counter.dataset.target;

const current =
+counter.innerText;

const increment =
target / 100;

if(current < target){

counter.innerText =
Math.ceil(
current + increment
);

setTimeout(
updateCounter,
20
);

}else{

counter.innerText =
target;

}

};

updateCounter();

});

<div
class="stat-number"
data-target="20">

0

</div>

window.addEventListener(
'load',
()=>{

const loader =
document.getElementById(
'loader'
);

setTimeout(()=>{

loader.classList.add(
'hidden'
);

},1000);

});

window.addEventListener(
'scroll',
()=>{

const scrollTop =
window.scrollY;

const documentHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(scrollTop /
documentHeight) * 100;

document
.getElementById(
'progressBar'
)
.style.width =
progress + '%';

});

document
.querySelectorAll(

'.card,.section-title,.hero-content,.timeline-item'

)

.forEach(el=>{

el.classList.add(
'reveal'
);

});

document
.querySelectorAll('.card')
.forEach(

(card,index)=>{

card.style.transitionDelay =
`${index * 0.08}s`;

}
);
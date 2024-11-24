document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});
let logoImg = document.querySelector('.logo-img');
logoImg.addEventListener('click', () => {
    location.reload();
});
let typed = new Typed('.auto-type', {
    strings: ['Education'],
    typeSpeed: 80,
    startDelay: 0,
    backSpeed: 10,
    loop: true,
});
let x = document.querySelector('.content1-wrapper');
console.log(x);
let cards = document.querySelectorAll('.card');
const animation = () => {
    cards.forEach((card) => {
        card.setAttribute('data-tilt', 'true');
    });
}

// test code
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Vanilla Tilt on card elements for specific screen sizes
    function initializeTilt() {
        if (window.innerWidth >= 710 && window.innerWidth <= 1080) {
            VanillaTilt.init(document.querySelectorAll('.animate'), {
                max: 15,
                speed: 400,
            });
        }
        if(window.innerWidth >= 1350) {
            VanillaTilt.init(document.querySelectorAll('.primary'), {
                max: 10,
                speed: 400,
            });
        }
        if(window.innerWidth >= 1350) {
            VanillaTilt.init(document.querySelectorAll('.secondary'), {
                max: 10,
                speed: 400,
            });
        }
    }

    // Run on page load
    initializeTilt();

    // Run on window resize
    window.addEventListener('resize', initializeTilt);
});


//test code
let about = document.querySelector('.about-text');
let more = document.querySelector('.more');
let count = 0;
let extraString = (about.innerText).slice(0, 314);
if(window.innerWidth <= 600) {
    text = about.innerText;
    about.innerText = extraString;
}
let moreData = true;
more.addEventListener('click', () => {
    if(moreData == true) {
        more.innerText = 'less';
        about.innerText = text;
        moreData = false
    } else {
        more.innerText = 'more'
        storedText = about.innerText;
        about.innerText = extraString;
        moreData = true;
        
    }
});



AOS.init();
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*======= Menu Show ========*/
/* validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======= Menu Hidden =======*/
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click' , LinkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
} 
window.addEventListener('scroll' , shadowHeader)

/*=============== ADD BUTTON ===============*/ 
var count1 = 0;
var out1 = document.getElementById('out1')
function countClicks1(){
    count1 = count1 + 1;
    out1.innerHTML = count1;
}
var count2 = 0;
var out2 = document.getElementById('out2')
function countClicks2(){
    count2 = count2 + 1;
    out2.innerHTML = count2;
}
var count3 = 0;
var out3 = document.getElementById('out3')
function countClicks3(){
    count3 = count3 + 1;
    out3.innerHTML = count3;
}
var count4 = 0;
var out4 = document.getElementById('out4')
function countClicks4(){
    count4 = count4 + 1;
    out4.innerHTML = count4;
}
var count5 = 0;
var out5 = document.getElementById('out5')
function countClicks5(){
    count5 = count5 + 1;
    out5.innerHTML = count5;
}
var count6 = 0;
var out6 = document.getElementById('out6')
function countClicks6(){
    count6 = count6 + 1;
    out6.innerHTML = count6;
}
/*=============== SHOW SCROLL UP ===============*/ 

const scrollup = () =>{
    const scrollup = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollup.classList.add('show-scroll')
                        : scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]')

    const scrollActive = () => {
        const scrollY = window.scrollY

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id'),
                  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

            if (sectionsClass) { // Check if sectionsClass is not null
                if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                    sectionsClass.classList.add('active-link')
                } else {
                    sectionsClass.classList.remove('active-link')
                }
            }
        })
    }

    window.addEventListener('scroll', scrollActive)
})
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-Icon')

//we obtain the current theme 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic 

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Active or deactive the theme with button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon' , getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,

// })

// sr.reveal('.home__data, .join__container, .footer')
// sr.reveal('.home__img', {origin: 'bottom'})
// sr.reveal('.enjoy__card, .popular__card ', {interval: 100})
// sr.reveal('.about__data', {origin: 'right'})
// sr.reveal('.about__img', {origin: 'left'})


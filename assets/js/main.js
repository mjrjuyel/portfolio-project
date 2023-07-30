// menu bar

// const NavToggle = document.getElementById('nav-toggle'),
//      NavClose = document.getElementById('nav-close'),
//      NavList = document.getElementById('nav-list')

//      if(NavToggle){
//           NavToggle.addEventListener('click',()=>{
//                NavList.classList.add('show-menu');
//           })
//      }
//      if(NavClose){
//           NavClose.addEventListener('click',()=>{
//                NavList.classList.remove('show-menu');
//           })
//      }
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
          navToggle.addEventListener('click', () =>{
               navMenu.classList.add('show-menu')
          })
      }
      if(navClose){
          navClose.addEventListener('click',()=>{
               navMenu.classList.remove('show-menu')
          })
      }
// nav_link action

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
     const navMenu = document.getElementById('nav-menu')

     navMenu.classList.remove('show-menu')

}
navLink.forEach(n => n.addEventListener('click', linkAction))

// modal link action

const modalView = document.querySelectorAll('.service_modal'),
      modalBtn = document.querySelectorAll('.service_button'),
      modalClose = document.querySelectorAll('.service_close_icon')

      
let modal = function(modalClick){
     modalView[modalClick].classList.add('modal_active')
}

modalBtn.forEach((mb, i) =>{
     mb.addEventListener('click', () =>{
          modal(i)
     })
})
modalClose.forEach((mc) =>{
     mc.addEventListener('click', ()=>{
          modalView.forEach((mv) =>{
               mv.classList.remove('modal_active')
          })
     })
})
// mixitup  
var mixerPortfolio = mixitup('.work_container', {
     selectors: {
         target: '.work_card'
     },
     animation: {
         duration: 300
     }
 });


//  filter action 

const linkwork = document.querySelectorAll('.work_item')

function activeWork(){
     linkwork.forEach(l=> l.classList.remove('active_work'))
     this.classList.add('active_work')
}
linkwork.forEach(l=> l.addEventListener('click' , activeWork))

// ===== swiper 
var swiper = new Swiper(".testimonial_container", {
     loop: true,
     spaceBetween: 24,
     grabCursor: true,
     autoplay : {
          delay: 2500,
     },
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
     breakpoints:{
          768:{
               slidesPerView: 2,

          },
          1024:{
               slidesPerView: 3,
          }
     }
   });

const sr = ScrollReveal({
     origin : 'top',
     distance : '60px',
     duration : 2500,
     reset : true,
})

sr.reveal('.home_data , .skill_group')
sr.reveal('.home_image', {delay : 200 , origin: 'bottom'})
sr.reveal('.home_social_link',{delay : 300 })
sr.reveal('.about_image,.contact_card', { origin: 'left' } )
sr.reveal('.about_box, .service_content,.contact_form', { origin: 'right', distance : '90px' , interval: 5})
sr.reveal('.work_card',{origin: 'top', interval : 16})
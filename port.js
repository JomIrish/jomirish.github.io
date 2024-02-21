let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset =sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
        }
    });

    /*========= sticky navbar==========*/

    let header = document.querySelector(' header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    menuIcon.classList.remove('active');
  
};



ScrollRevel({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollRevel().revel('.home-content, .heading',{origin: 'top'});
ScrollRevel().revel('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'});









const typed = new Typed('.multiple-text',{
    String: ['Fontend developer','Blogger','youtuber'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
})
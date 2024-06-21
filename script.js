$(document).ready(function () {


    /* For Sticky Nav */

    $('.js--section--features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky animate__animated animate__slideInDown animate__faster');
        } else {
            $('nav').addClass('animate__animated animate__slideOutUp').removeClass('animate__slideInDown');

            setTimeout(function () {
                $('nav').removeClass('sticky animate__slideOutUp');
            }, 100);
        }
    }, {
        offset: '60px;'
    });



    /* Scroll on Button */

    $('.js--scroll-to-book').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-book').offset().top }, 100);
    });


    /* Mobile navigation */

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');
        
        if (icon.attr('name') == 'menu-outline') {
            icon.attr('name', 'close-outline');
        }
        else {
            icon.attr('name', 'menu-outline')
        }

        nav.slideToggle(200);
    });

});

// let navbar = document.getElementById("navigation");

// let shouldStickPosition = navbar.offsetHeight;

// function addOrRemoveStickyClass() {
//     if (window.scrollY >= shouldStickPosition) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

// window.onscroll = () => {
//     addOrRemoveStickyClass();
// };

// window.onresize = () => {
//     shouldStickPosition = navbar.offsetTop;
// };
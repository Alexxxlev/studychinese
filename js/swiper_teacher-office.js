/* Swiper slide для inquiry
**************************************************************/
var swiperInquiry = new Swiper(".swiper_inquiry", {
    slidesPerView: 1,
    speed: 1200,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* Swiper slide для inquiry-sm
**************************************************************/
var swiperInquiry = new Swiper(".swiper_teachers", {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1200,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* Swiper slide для settings
**************************************************************/
var swiperYour_teachers = new Swiper(".swiper_your-teachers", {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 1200,
    observer: true,
    observeParents: true,

    breakpoints: {
    
        720: {
          slidesPerView: 3,
        },

        320: {
            slidesPerView: 'auto',
        },
      },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* Swiper slide для personal-account-all-lessons и personal-account-all-tasks
**************************************************************/
var init = false;
var swiper = swiper;

function swiperMode() {
    let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
    let tablet = window.matchMedia('(min-width: 767px) and (max-width: 1024px)');
    let desktop = window.matchMedia('(min-width: 1025px)');

    // Enable (for mobile)
    if(mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper_lessons, .swiper_tasks', {
                slidesPerView: 'auto',
                speed: 1200,
            });
        }

    }

    // Disable (for tablet)
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }

    // Disable (for desktop)
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

/* On Load
**************************************************************/
window.addEventListener('load', function() {
    swiperMode();
});

/* On Resize
**************************************************************/
window.addEventListener('resize', function() {
    swiperMode();
});
// ===== NAVBAR =====
// Navbar Button
const navbarBtn = document.querySelector('.navbar-btn');
const nav = document.querySelector('.nav');

navbarBtn.onclick = () => {
    navbarBtn.classList.toggle('active');
    nav.classList.toggle('active');
}

// Show/Hide subnav
const navTitles = document.querySelectorAll('.nav-item:not(:last-child)');
const overlay = document.querySelector(".overlay");

navTitles.forEach((navTitle) => {
    navTitle.onclick = () => {
        const subnav = navTitle.querySelector(".sub-nav");

        if (subnav) {
            if (!subnav.className.includes("active")) {
                removeActiveSubnav();
            }
            subnav.classList.toggle("active");
        }

        const navTitleActive = document.querySelector(".nav-item.active");

        if (navTitleActive) {
            navTitleActive.classList.remove("active");
        }
        navTitle.classList.toggle("active");
    };
});

// Click outside
document.onclick = (e) => {
    // Click outside nav
    if (nav.className == 'nav active') {
        if ((!nav.contains(e.target)) && (!navbarBtn.contains(e.target))) {
            nav.classList.remove("active");
            navbarBtn.classList.remove("active");
        }
    }

    // Click outside subnav
    var checkClickOutside = true;

    navTitles.forEach((navTitle) => {
        const navTitleTitle = navTitle.children[0];

        if (navTitleTitle.contains(e.target)) {
            checkClickOutside = false;
        }
    })

    if (checkClickOutside) {
        removeActiveSubnav();
    }
}

function removeActiveSubnav() {
    const activeSubnav = document.querySelector(".sub-nav.active");

    if (activeSubnav) {
        activeSubnav.classList.remove("active");
    }
}

// ===== Active Nav Title =====
// const navTitles = document.querySelectorAll('.nav-item:not(:last-child)');
const subnavTitles = document.querySelectorAll('.subnav-item');

subnavTitles.forEach((title) => {
    title.onclick = () => {
        const subnavTitleActive = document.querySelector(".subnav-item.active");

        if (subnavTitleActive) {
            subnavTitleActive.classList.remove("active");
        }
        title.classList.toggle("active");
    }
})

// ===== HEADER FIXED =====
var lastScroll = 0;
const header = document.querySelector('.header');

window.onscroll = () => {
    // 0 -------- 
    // ---------- 
    // header --- 
    // ---------- < scroll active
    // ---------- [lastScroll]
    // ---------- > scroll
    
    const currentScroll = window.pageYOffset;

    if (currentScroll > header.offsetHeight) {
        header.classList.add('scroll');

        if (currentScroll < lastScroll) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');

            nav.classList.remove("active");
            navbarBtn.classList.remove("active");
            removeActiveSubnav();
        }
    } else {
        header.className = "header bg-blue";
    }

    lastScroll = currentScroll;
}

// ===== BANNER SLIDER =====
const swiper = new Swiper(".swiper-container", {
    // Optional parameters
    loop: true,
    spaceBetween: 100,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// ===== Map Point =====
const rootStyle = document.documentElement.style;
const map = document.querySelector('.map__pin');

window.onresize = () => {
    const mapWidth = map.clientWidth + 'px';
    const mapHeight = map.clientHeight + 'px';

    rootStyle.setProperty('--map-width', mapWidth);
    rootStyle.setProperty('--map-height', mapHeight);

    console.log(mapWidth, mapHeight);
}
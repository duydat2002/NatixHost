// ===== NAVBAR =====
// Navbar Button
const navbarBtn = document.querySelector('.navbar-btn');
const nav = document.querySelector('.nav');

navbarBtn.onclick = () => {
    navbarBtn.classList.toggle('active');
    nav.classList.toggle('active');
}

// Show/Hide subnav
const dropdowns = document.querySelectorAll(".dropdown");
const overlay = document.querySelector(".overlay");

dropdowns.forEach((dropdown) => {
    dropdown.onclick = () => {
        const subnav = dropdown.querySelector(".sub-nav");

        if (!subnav.className.includes("active")) {
            removeActiveSubnav();
        }
        subnav.classList.toggle("active");
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

    dropdowns.forEach((dropdown) => {
        const dropdownTitle = dropdown.children[0];

        if (dropdownTitle.contains(e.target)) {
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

window.onload = () => {
    rootStyle.setProperty('--map-width', map.clientWidth + 'px');
    rootStyle.setProperty('--map-height', map.clientHeight + 'px');
}

window.onresize = () => {
    const mapWidth = map.clientWidth + 'px';
    const mapHeight = map.clientHeight + 'px';

    rootStyle.setProperty('--map-width', mapWidth);
    rootStyle.setProperty('--map-height', mapHeight);
}
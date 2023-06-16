function menuCreate() {
    const toggle = document.getElementById("menu-btn");
    const lists = document.querySelector(".menu-list");
    const closeBtn = document.getElementById("close");
    toggle.addEventListener("click", () => {
        lists.classList.add("show");
    });
    closeBtn.addEventListener("click", () => {
        lists.classList.remove("show");
    });
}
menuCreate();

function childelement() {
    const childbtn = document.getElementById("childremove");
    const parents = document.querySelectorAll(".removechild");
    childbtn.addEventListener("click", () => {
        parents.forEach((parent) => {
            parent.style.transition = "opacity 0.5s";
            parent.style.opacity = "0";
            setTimeout(() => {
                parent.remove();
            }, 500);
        });
        newbody();
    });
}

function newbody() {
    const mainbody = document.getElementById("main-web");
    mainbody.innerHTML = "";
}

function newelement() {
    const btnpower = document.getElementById("childremove");
    const newparent = document.getElementById("new-page");

    btnpower.addEventListener("click", () => {
        newparent.style.display = "block";
        saveState();
    });
}

function saveState() {
    localStorage.setItem("newPageVisible", "true");
}

document.addEventListener("DOMContentLoaded", function () {
    const state = localStorage.getItem("newPageVisible");
    if (state === "true") {
        const newparent = document.getElementById("new-page");
        const mainbody = document.getElementById("main-web");
        mainbody.style.display = "none";
        newparent.style.display = "block";
    }

    newelement();
});

childelement();
newelement();

const returnElement = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const back = document.querySelector(".bi.bi-box-arrow-left");
        const newparent = document.getElementById("new-page");
        const mainbody = document.getElementById("main-web");

        back.addEventListener("click", (event) => {
            event.preventDefault();
            newparent.style.display = "none";
            mainbody.style.display = "block";
        });
    });
}
returnElement();

// swiper js code here

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

function table_animation() {
    const table_content = document.querySelectorAll(".tab-content li");
    const img_content = document.querySelectorAll(".container-around .img-content-around");
    table_content.forEach((main, index) => {
        main.addEventListener("click", () => {
            table_content.forEach((def) => {
                def.classList.remove("actived");
            });
            main.classList.add("actived");
            img_content.forEach((def) => {
                def.classList.remove("actived");
            });
            img_content[index].classList.add("actived");
        });
    });
}
table_animation();

document.addEventListener("DOMContentLoaded", function () {
    function github() {
        const git = document.querySelector(".bi.bi-github");
        git.addEventListener("click", () => {
            window.open("https://github.com/Technical-Abm", "_blank");
        });
    }
    github();
});

menuToggleAction = ()=> {
    if (window.innerWidth < 800) {
        const addButtonChange = document.getElementById('mobileButton');
        addButtonChange.classList.toggle('buttonChange');
        const menuActionSlide = document.getElementById("navigation");
        menuActionSlide.classList.toggle("menuAction");
    }
    else {}
};
window.menuToggleAction=menuToggleAction;

/*Smooth scroll data-scroll*/

const scroll = new SmoothScroll('a[href*="#"]');

wondow.scroll=scroll;
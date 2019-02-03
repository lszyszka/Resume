const footerWrap = document.querySelector('footer .wrap');
const footer = document.querySelector('footer');

const projectDiv = document.querySelectorAll('.one-project');

//showFooterAnimationOnScroll
var lastScrollPosition = 0;
window.addEventListener('scroll', function () {
    let scrollPosition = this.scrollY;
    let footerFromTop = footer.offsetTop;
    if (scrollPosition > footerFromTop - window.innerHeight) {
        footerWrap.classList.add('active');
    }
});

//show Projects Section Animation On Scroll
window.addEventListener('scroll', function () {
    let scrollPosition = this.scrollY;
    let firstDivProject = projectDiv[0].offsetTop;
    if (scrollPosition > firstDivProject - window.innerHeight) {
        projectDiv[0].classList.add('active');
    }
    let secondDivProject = projectDiv[1].offsetTop;
    if (scrollPosition > secondDivProject - window.innerHeight) {
        projectDiv[1].classList.add('active');
    }
    let thirdDivProject = projectDiv[2].offsetTop;
    if (scrollPosition > thirdDivProject - window.innerHeight) {
        projectDiv[2].classList.add('active');
    }
})
const footerWrap = document.querySelector('footer .wrap');
const footer = document.querySelector('footer');

//showFooterAnimationOnScroll
var lastScrollPosition = 0;
window.addEventListener('scroll', function () {
    let scrollPosition = this.scrollY;
    let footerFromTop = footer.offsetTop;
    if (scrollPosition > footerFromTop - window.innerHeight) {
        footerWrap.classList.add('active');
    }
});
const footerWrap = document.querySelector('footer .wrap');
const footer = document.querySelector('footer');

const projectDiv = document.querySelectorAll('.one-project');
console.log(projectDiv);

//showFooterAnimationOnScroll
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
    let secondDivProject = projectDiv[1].offsetTop;
    let thirdDivProject = projectDiv[2].offsetTop;
    if (scrollPosition > firstDivProject - window.innerHeight + 150) {
        projectDiv[0].classList.add('active');
    }
    if (scrollPosition > secondDivProject - window.innerHeight + 150) {
        projectDiv[1].classList.add('active');
    }
    if (scrollPosition > thirdDivProject - window.innerHeight + 150) {
        projectDiv[2].classList.add('active');
    }
    //reset animation
    if (scrollPosition < 100) {
        projectDiv.forEach((el) => {
            el.classList.remove('active');
        })
    }
})

window.addEventListener('scroll', function () {
    let scrollPosition = this.scrollY;
    let elementPosition = document.querySelector('input[type=submit').offsetTop;
    if (scrollPosition > elementPosition - window.innerHeight + 50) {
        document.querySelector('input[type=submit').classList.add('active');
    } else {
        document.querySelector('input[type=submit').classList.remove('active');
    }
})

document.querySelectorAll('li').forEach((el) => {
    el.classList.add('active');
})

const backToTopBtn = document.querySelector('.backToTop');

backToTopBtn.addEventListener('click', function () {
    $('html,body').animate({
        "scrollTop": 0
    }, 500);
})

window.addEventListener('scroll', function () {
    let scrollPosition = this.scrollY;
    if (scrollPosition > 100) {
        backToTopBtn.classList.add("active");
    } else {
        backToTopBtn.classList.remove("active");
    }

})
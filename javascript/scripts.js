function changeBg() {
    const navbar = document.getElementById('navbar');
    const scrollValue = window.scrollY;

    if(scrollValue < 300) {
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);

function scrollToIdSmoothly(id) {
    const element = document.getElementById(id);
    if (element) {
        const offsetTop = element.offsetTop;
        const scrollOptions = {
            top: offsetTop,
            behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
    }
}
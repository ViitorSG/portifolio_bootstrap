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
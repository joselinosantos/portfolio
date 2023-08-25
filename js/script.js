const btnMode = document.querySelector('.dark-mode')
const secoes = document.querySelectorAll('section')
const buttons = document.querySelectorAll('.btn')
const titulos = document.querySelectorAll('h1, h2, h3, h4')
const navBar = document.querySelector('.navbar')

// Dark mode
btnMode.addEventListener('click', () => {
    document.body.style.backgroundColor = '#0f0025'

    secoes.forEach(secao => {
        secao.style.backgroundColor = '#0f0025'
    });

    buttons.forEach(btn => {
        btn.style.backgroundColor = '#7635d8'
        btn.style.color = '#fff'
    });

    titulos.forEach(titulo => {
        titulo.style.color = '#fff'
    });
})

// Scroll to up
let toTopButton = document.getElementById("btn-back-to-top");

toTopButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = () => {
    scrollPage();
};

function scrollPage() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }

    document.getElementsByTagName("html")[0].style.scrollBehavior = "smooth"
}
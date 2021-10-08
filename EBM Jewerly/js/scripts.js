let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

window.scrollTo(0, 0);

const goToTop = () => window.scrollTo(0, 0);

goToTop();
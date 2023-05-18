//helpers
import getLetters from "../helpers/getLetters";

const menu = () => {
    const menuBton = document.querySelector('.menu-btn');
    const menuOptions = document.querySelector('.menu-options');
    const menuTextLinks = document.querySelectorAll('.menu-options__text');
    const menuTextBoxes = document.querySelectorAll('.menu-options__boxes');
    const closeMenu = document.getElementById('close-menu');
    let isClosed = true;

    menuTextLinks.forEach(el => {
        getLetters(el, 'spanLetters');
    });

    menuBton.addEventListener('click', (e) => {
        e.preventDefault();
        menuBton.classList.toggle('open');
        menuTextBoxes.forEach(el => {
            isClosed ? el.style.width = 'auto' : setTimeout(() => { el.style.width = '0' }, 300);
        });
        document.querySelectorAll('.spanLetters').forEach(el => {
            if (isClosed) {
                el.style.transitionDelay = '0.5s';
                el.style.transform = 'translateY(0%) rotate(0deg)';
                closeMenu.style.transitionDelay = '0.5s';
                closeMenu.style.opacity = '1';
                el.style.opacity = '1';
                menuBton.setAttribute('data-type', 'close');
                menuOptions.style.transitionDelay = '0s';
                menuOptions.style.width = '100vw';
            } else {
                el.style.transitionDelay = '0s';
                menuBton.setAttribute('data-type', 'menu');
                el.style.transform = 'translateY(90%) rotate(20deg)';
                closeMenu.style.transition = '0.5s';
                closeMenu.style.opacity = '0';
                el.style.opacity = '0';
                menuOptions.style.transitionDelay = '0.5s';
                menuOptions.style.width = '0vw';
            }
        });
        isClosed = !isClosed;
    });

    function close() {
        menuBton.classList.toggle('open');
        menuTextBoxes.forEach(el => {
            setTimeout(() => { el.style.width = '0' }, 300);
        });
        document.querySelectorAll('.spanLetters').forEach(el => {
            menuBton.setAttribute('data-type', 'menu');
            el.style.transitionDelay = '0s';
            el.style.transform = 'translateY(90%) rotate(20deg)';
            closeMenu.style.transition = '0.5s';
            closeMenu.style.opacity = '0';
            el.style.opacity = '0';
            menuOptions.style.transitionDelay = '0.5s';
            menuOptions.style.width = '0vw';
        });
        isClosed = !isClosed;
    }

    closeMenu.addEventListener('click', close);
    menuTextBoxes.forEach(el => {
        el.addEventListener('click', close);
    });
};

export default menu;
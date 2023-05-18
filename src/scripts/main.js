//styles
import styles from '../styles/style.css';

//images
import programL from '../assets/img/programL.webp';
import patitasACasa from '../assets/img/patitasACasa.webp';
import courseApp from '../assets/img/courseApp.webp';

//js files
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';

//sections
import menu from './sections/menu';

import home from './sections/home';
import { myself } from './sections/home';

import about from './sections/about';
import { split } from './sections/about';

import work from './sections/work';

import talk from './sections/talk';
import trailerMouse from './sections/trailerMouse';

//locomotive
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-container'),
    smooth: true,
    smoothMobile: true,
    multiplier: 1,
    smartphone: {
        smooth: true,
        locomotive: true,
        init: true,
        speed: 20,
        multiplier: 2
    },
});

window.addEventListener('DOMContentLoaded', () => {

    //observers
    new ResizeObserver(() => scroll.update()).observe(
        document.querySelector(".main-container")
    );

    window.addEventListener('resize', () => {
        scroll.update();
    });

    /*const lazySections = document.querySelectorAll('.lazy');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                //section.classList.remove('lazy');
                observer.unobserve(section);
            }
        });
    });
    lazySections.forEach(section => {
        observer.observe(section);
    });*/

    //get location links locomotive scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            scroll.scrollTo(this.getAttribute('href'));
        });
    })

    //menu
    menu();

    //Home 
    home();

    //About
    about();
    const aboutSection = document.querySelector('.about-section');
    const aboutTitle = document.getElementById('about-title');

    //Work
    work();
    const workSection = document.querySelector('.work-section');

    //Talk
    talk();
    const circleAnimtaionTalk = document.getElementById('circle-container__talk');
    const talkSection = document.querySelector('.talk-section');

    //scroll
    let wasExecutedTextAbout = false;
    let wasExecutedSocialmediaLinks = false;

    scroll.on('scroll', function (instance) {
        //scrolls
        const scroll1 = instance.scroll.y;
        const scroll2 = instance.scroll.y + window.innerHeight;

        //scale home image
        if (scroll1 <= aboutSection.offsetTop) {
            if (window.innerWidth < 550) {
                myself.style.transform = `scale(${1 + scroll1 * 0.00035})`;
            } else {
                myself.style.transform = `scale(${1 + scroll1 * 0.0002})`;
            }
        }

        //show about me text
         if (!wasExecutedTextAbout && (scroll1 + (window.innerHeight / 4)) > aboutSection.offsetTop) {
            let a = gsap.to(split.lines, {
                y: "10%",
                duration: 0.5,
                stagger: 0.1,
                delay: 0.1,
                opacity: 1,
                ease: "power4.out",
            });
            wasExecutedTextAbout = true;
        }

        //about title transition scroll
        if (scroll2 >= aboutSection.offsetTop && scroll2 < (workSection.offsetTop + 150)) {
            const value = scroll2 - aboutSection.offsetTop + 70;
            aboutTitle.style.transform = `translateX(-${value}px)`;
        }

        //socialmedia links animation
        if (!wasExecutedSocialmediaLinks && (scroll1 + (window.innerHeight / 2)) > talkSection.offsetTop) {
            circleAnimtaionTalk.style.transform = 'scale(1)';
            document.querySelectorAll('.letters').forEach(el => {
                el.style.transform = ' translateY(0%) rotate(0deg)';
            });
            wasExecutedSocialmediaLinks = true;
        }
    });

    //mouse trailer
    trailerMouse(aboutTitle);
});

window.addEventListener('load', () => {
    scroll.update();
});
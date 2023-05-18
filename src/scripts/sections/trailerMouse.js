//helpers
import repeater from "../helpers/repeaterText";

const trailerMouse = (aboutTitle) => {

    let screen = window.innerWidth / 100;
    //if mobile device
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        //remove trailer
        document.getElementById('trailer').style.display = 'none';

        repeater(aboutTitle, Math.ceil(screen) + 1);
    } else {
        repeater(aboutTitle, Math.ceil(screen));

        //mouse trailer
        const getTrailerClass = type => {

            switch (type) {
                case "link":
                    return "fa-solid fa-arrow-up";
                case "menu":
                    return "fa-solid fa-chevron-up";
                case "download":
                    return "fa-solid fa-chevron-down";
                case "close":
                    return "fa-solid fa-xmark";
                case "myPhoto":
                    return "fa-solid fa-heart";
                case "project":
                    return "fa-solid fa-share fa-flip-vertical";
                case "linkedIn":
                    return "fa-brands fa-linkedin-in";
                case "email":
                    return "fa-solid fa-envelope";
                case "github":
                    return "fa-brands fa-github";
                case "instagram":
                    return "fa-brands fa-instagram";
                default:
                    return "";
            }
        }

        let size1 = 0
        let size2 = 0
        const trailer = document.getElementById("trailer");
        const animateTrailer = (e, interacting) => {
            const x = e.clientX - trailer.offsetWidth / 2,
                y = e.clientY - trailer.offsetHeight / 2;
            if (window.innerWidth < 550) {
                size1 = 0.63
                size2 = 0.15
            } else if (window.innerWidth < 700) {
                size1 = 0.75
                size2 = 0.20
            } else if (window.innerWidth < 1000) {
                size1 = 0.87
                size2 = 0.20
            } else {
                size1 = 1
                size2 = 0.25
            }
            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${interacting ? size1 : size2})`,
            }
            trailer.animate(keyframes, {
                duration: 800,
                fill: "forwards",
            });
        }

        window.onmousemove = e => {
            const interactable = e.target.closest(".interactable"),
                interacting = interactable !== null;

            const icon = document.getElementById("trailer-icon");

            animateTrailer(e, interacting);

            trailer.dataset.type = interacting ? interactable.dataset.type : "";

            if (interacting) {
                icon.setAttribute("class", getTrailerClass(interactable.dataset.type));
            }
        }
    }

};

export default trailerMouse;

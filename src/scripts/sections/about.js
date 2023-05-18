//hepers
import repeater from "../helpers/repeaterText";
import getLetters from "../helpers/getLetters";
import SplitText from '../helpers/split';

export let split;
const about = () => {
    const resumee = document.getElementById('resume-word');

    repeater(resumee, 2);
    getLetters(resumee, 'resumee-letters');

    document.querySelectorAll('.resumee-letters').forEach((el, id) => {
        el.style.transform = `rotate(${id * 26}deg)`;
    });

    const text = document.querySelector('.about-first__text');
        split = new SplitText(text, { type: "lines", linesClass: "lineChild" });
    //const mask = new SplitText(text, { types: "lines", linesClass: "lineParent" });

};

export default about;
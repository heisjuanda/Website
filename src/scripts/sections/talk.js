//hepers
import getLetters from "../helpers/getLetters";

const talk = () => {
    document.querySelectorAll('.text-to-letters').forEach(el => {
        getLetters(el, 'letters');
    });
};

export default talk;
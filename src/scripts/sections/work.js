//js files
import ProjectCreator from "../projects";

//helpers
import getLetters from "../helpers/getLetters";
const work = () => {
    const topics = [
        {
            name: 'ProgramLanguage',
            url: './assets/img/programL.webp',
            description: 'program language',
            objetives: 'create a program language',
            goals: 'understand a program language',
            tech: ['Dr Racket', 'Schme'],
            direction: '-3 https://github.com/heisjuanda/Program-language',
        },
        {
            name: 'PatitasACasa',
            url: './assets/img/patitasACasa.webp',
            description: 'Sowtware to find pets',
            objetives: 'create a program language',
            goals: 'Help pets',
            tech: ['React', 'HTML', 'Css', 'JavaScript'],
            direction: '3 https://github.com/adanj27/Patitas-a-casa',
        },
        {
            name: 'CoursesApp',
            url: './assets/img/courseApp.webp',
            description: 'program language',
            objetives: 'create a program language',
            goals: 'understand a program language',
            tech: ['Dr Racket', 'Schme'],
            direction: '-3 https://github.com/heisjuanda/course-app',
        },
    ];

    let project = new ProjectCreator();

    topics.forEach(el => {
        project.create(el.name, el.url, el.description, el.objetives, el.goals, el.tech, el.direction);
    });

    getLetters(document.getElementById('WORK'), "work-letters");
    document.querySelectorAll('.work-letters').forEach((letter, position) => {
        letter.style.display = 'inline-block';
        letter.setAttribute('data-scroll', '');
        letter.setAttribute('data-scroll-speed', `${position + 1}`);
        letter.setAttribute('data-scroll-direction', 'vertical');
    });
};

export default work;
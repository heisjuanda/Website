
class Project {
    constructor(type, url, description, objetives, goals, tech, direction) {
        const [movement, pageUrl] = direction.split(' ');
        const section = document.querySelector('.work-section__content');
        this.project = document.createElement('div');
        this.project.className = 'content--container';
        this.project.id = type;
        this.project.setAttribute('data-scroll', '');
        this.project.setAttribute('data-scroll-speed', `${movement}`);
        this.project.setAttribute('data-scroll-direction', 'horizontal');
        this.project.innerHTML = `
        <div class="img interactable" data-type='project'>
            <a target='_blank' href=${pageUrl}>
                <img src='${url}' alt='project with name ${type}' loading="lazy"/>
            </a>
            <div class="circle"></div> 
            <i class="fa-solid fa-plus"></i>
        </div> 
        `;
        section.appendChild(this.project);
    }
    remove() {
        this.project.remove();
    }
    static create(type, url, description, objetives, goals, tech,direction, creator) {
        return new Project(type, url, description, objetives, goals, tech,direction, creator);
    }
}

export default class ProjectCreator {
    create(type, url, description, objetives, goals, tech, direction) {
        let section = Project.create(type, url, description, objetives, goals, tech, direction, this);
        return section.project;
    }
}

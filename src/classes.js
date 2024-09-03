import { submitProjectButton, submitItemButton, titleInput, descrInput, dueDateInput, priorityInput, projectTitleInput, projectDescrInput, projectsContainer} from "./domStuff.js";

class ToDoApp 
{
  static projects = [];
  static currentProject = null; // Initialized as null or assign a specific project if needed

  static displayProjects() {
    projectsContainer.replaceChildren();
    this.projects.forEach((project) => {
      const projectContainer = document.createElement('div');
      projectContainer.className = 'projectContainer';

      const titleElement = document.createElement('h1');
      const descrElement = document.createElement('p');
      titleElement.textContent = project.title;
      descrElement.textContent = project.descr;

      const deleteProjectButton = document.createElement('button');
      deleteProjectButton.textContent = 'Delete Project';
      deleteProjectButton.addEventListener('click', () => this.deleteProject(project));

      projectContainer.appendChild(titleElement);
      projectContainer.appendChild(descrElement);
      projectContainer.appendChild(deleteProjectButton);
      projectsContainer.appendChild(projectContainer);
    });
  }
}

class Project
{
  items = [];
  constructor(title, descr)
  {
    this.title = title;
    this.descr = descr;
  }
  createItem()
  {
  }
  deleteItem()
  {
  }
  displayItemsInProject()
  {
  }
}

class ToDoItem
{
  constructor(title, descr, dueDate, priority)
  {
    this.title = title;
    this. descr = descr;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}



export { ToDoApp, Project, ToDoItem }
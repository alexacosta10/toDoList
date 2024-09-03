import { submitProjectButton, submitItemButton, titleInput, descrInput, dueDateInput, priorityInput, projectTitleInput, projectDescrInput, projectsContainer} from "./domStuff.js";

const ToDoApp = (() => {
  let projects = [];
  let currentProject = null;

  const displayProjects = () => {
    projectsContainer.replaceChildren();

    projects.forEach((project) => {
      const projectContainer = document.createElement('div');
      projectContainer.className = 'projectContainer';

      const titleElement = document.createElement('h1');
      const descrElement = document.createElement('p');
      titleElement.textContent = project.title;
      descrElement.textContent = project.descr;

      const deleteProjectButton = document.createElement('button');
      deleteProjectButton.textContent = 'Delete Project';
      deleteProjectButton.addEventListener('click', () => deleteProject(project));

      projectContainer.appendChild(titleElement);
      projectContainer.appendChild(descrElement);
      projectContainer.appendChild(deleteProjectButton);
      projectsContainer.appendChild(projectContainer);
    });
  };

  const createProject = () => {
    const projectTitle = projectTitleInput.value;
    const projectDescr = projectDescrInput.value;

    if (projectTitle && projectDescr) 
    {
      projects.push(new Project(projectTitle, projectDescr));
      projectTitleInput.value = projectDescrInput.value = '';
      displayProjects();
    } 
    else 
    {
      alert("Please enter a project title and description.");
    }
  };

  const deleteProject = (projectToDelete) => {
    projects = projects.filter(project => project !== projectToDelete);
    displayProjects();
  };

  const init = () => {
    // Attach event listeners to buttons or any DOM-related initializations
    const createProjectButton = document.getElementById('createProjectButton');
    createProjectButton.addEventListener('click', createProject);

    displayProjects();
  };

  return {
    init,
    createProject,
    deleteProject,
    displayProjects,
  };
})();


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
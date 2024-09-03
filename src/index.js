import { Project, ToDoItem } from "./classes.js";
import "./styles.css";
import { submitProjectButton, submitItemButton, titleInput, descrInput, dueDateInput, priorityInput, projectTitleInput, projectDescrInput, projectsContainer, pageContainer, backToHomeButton, itemForm, backToProjectsButton, projectForm} from "./domStuff.js";

const ToDoApp = (() => 
{
  let projects = [];

  const createProject = () => 
  {
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

  const deleteProject = (projectToDelete) => 
  {
    projects = projects.filter(project => project !== projectToDelete);
    displayProjects();
  };

  const displayClickedProject = (projectToDisplay) => 
  {
    pageContainer.replaceChildren();
    pageContainer.appendChild(itemForm);
    backToProjectsButton.textContent = 'Home';
    pageContainer.appendChild(backToProjectsButton);
    backToProjectsButton.addEventListener('click', () => 
    {
      pageContainer.replaceChildren();
      pageContainer.appendChild(projectForm);
      pageContainer.appendChild(projectsContainer);
      displayProjects();
    })

    // projectToDisplay.forEach((item) => 
    // {
    //   const itemContainer = document.createElement('div');
    //   itemContainer.className = 'itemContainer';
  
    //   const titleElement = document.createElement('h1');
    //   const dueDateElemnt = document.createElement('h2');
    //   const descrElement = document.createElement('p');
    //   '
    //   titleElement.textContent = item.title;
    //   descrElement.textContent = item.descr;
  
    //   const deleteItemButton = document.createElement('button');
    //   deleteProjectButton.textContent = 'Delete Project';
    //   deleteProjectButton.addEventListener('click', () => deleteProject(project));
  
    //   itemContainer.appendChild(titleElement);
    //   itemContainer.appendChild(descrElement);
    //   itemContainer.appendChild(projectContainer);
    //   itemContainer.appendChild(projectContainer);
    //   itemContainer.appendChild(deleteItemButton);
    // });
  }

  //Creates and Displays HTML Content for each 'Project' class in 'projects'
  const displayProjects = () => 
  {
    projectsContainer.replaceChildren();

    projects.forEach((project) => 
    {
      const projectContainer = document.createElement('div');
      projectContainer.className = 'projectContainer';

      const titleElement = document.createElement('h1');
      titleElement.addEventListener('click', () => displayClickedProject(project));

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

  const init = () => 
  {
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
    displayClickedProject
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  pageContainer.removeChild(itemForm);
  ToDoApp.init();
});
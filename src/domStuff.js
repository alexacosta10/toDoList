import { ToDoApp, Project, ToDoItem } from "./classes";

export const pageContainer = document.getElementById('container');
export const projectsContainer = document.getElementById('projects');
export const projectForm = document.getElementById('createsProject');
export const itemForm = document.getElementById('createsItem');

export const projectTitleInput = document.getElementById('projectTitle');
export const projectDescrInput = document.getElementById('projectDescr');
export const submitProjectButton = document.getElementById('submitProject');

export const titleInput = document.getElementById('title');
export const descrInput = document.getElementById('descr');
export const dueDateInput = document.getElementById('dueDate');
export const priorityInput = document.getElementById('priority');
export const submitItemButton = document.getElementById('submitItem');
export const backToProjectsButton = document.createElement('button');

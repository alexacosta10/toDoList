import { ToDoApp, Project, ToDoItem } from "./classes.js";
import "./styles.css";
import { submitProjectButton, submitItemButton, titleInput, descrInput, dueDateInput, priorityInput, projectTitleInput, projectDescrInput, projectsContainer} from "./domStuff.js";

document.addEventListener("DOMContentLoaded", () => {
  ToDoApp.init();
});
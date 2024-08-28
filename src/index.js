import { ToDoApp, Project, ToDoItem } from "./components/classes";
import "./styles.css";
import { titleInput, descrInput, dueDateInput, priorityInput} from "./components/domStuff.js";

//Function is where the parameter is project object and ends with appending the item to it

function createItem(project)
{
  const itemContainer = document.createElement('div');
  itemContainer.className = 'itemContainer';
  const title = document.createElement('h1');
  const descr = document.createElement('p');
  const dueDate = document.createElement('p');
  const priority = document.createElement('div');
  if(titleInput.value !== '')
  {
    title.textContent = titleInput.value;
  }
  if(descrInput.textContent !== '')
  {
    descr.textContent = descrInput.value;
  }
  dueDate.textContent = dueDateInput.value;
  if(priorityInput.value == 'low')
  {
    priority.className = 'low';
  }
  else if(priorityInput.value == 'medium')
  {
    priority.className = 'medium';
  }
  else if(priorityInput.value == 'high')
  {
    priority.className = 'high';
  }
  const item = new ToDoItem(title, descr, dueDate, priority);
  Project.items
}

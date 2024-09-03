import { submitProjectButton, submitItemButton, titleInput, descrInput, dueDateInput, priorityInput, projectTitleInput, projectDescrInput, projectsContainer} from "./domStuff.js";

class Project
{
  items = [];
  constructor(title, descr)
  {
    this.title = title;
    this.descr = descr;
  }
  createItem = () => 
  {
    const itemTitle = titleInput.value;
    const itemDescr = descrInput.value;
    const itemDueDate = dueDateInput.value;
    const itemPriority = priorityInput.value;

    if (itemTitle && itemDescr && itemDueDate && itemPriority) 
    {
      this.items.push(new ToDoItem(itemTitle, itemDescr, itemDueDate, itemPriority));
      titleInput.value = descrInput.value = itemDueDate.value = itemPriority.value = null;
      this.displayItemsInProject();
    } 
    else 
    {
      alert("Please enter item's title, description, due date, & priority.");
    }
  };
  
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

export { Project, ToDoItem }
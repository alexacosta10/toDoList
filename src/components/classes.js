class ToDoApp
{
  static projects = [];
  static createProject(title, descr)
  {
    const project = new Project(title, descr);
    this.projects.push(project);
  }
  static deleteProject(project)
  {
    project = null;
  }
}

class Project
{
  static items = []
  constructor(title, descr)
  {
    this.title = title;
    this.descr = descr;
  }
  createItem(title, descr, dueDate, priority)
  {
    const item = new ToDoItem(title, descr, dueDate, priority);
    this.items.push(item);
  }
  deleteItem(item)
  {
    item = null;
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

export { ToDoApp, Project, ToDoItem}
import { Injectable } from '@angular/core';
import { ToDo } from '../Models/to-do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor() { }

todos: ToDo[] = [
  {id: 1, titel: 'Winkelen', description: '', done: true},
  {id: 2, titel: 'thuin', description: '', done: false},
  {id: 3, titel: 'auto wassen', description: '', done: false},
  {id: 4, titel: 'afwassen', description: '', done: false}

]

  // todos: ToDo[] = [];

  getAllTodo(): ToDo[]{
    return this.todos;
  }

  getTodoDone(): ToDo[]{
    return this.todos.filter(t => t.done === true);
  }

  getTodoNotDone(): ToDo[]{
    return this.todos.filter(t => t.done === false);
  }

  addTodo(todo: ToDo): ToDoService{
    if(!todo.id){
      todo.id = this.getLastTodoId() +1;
    }
    this.todos.push(todo);

    return this;
  }

  updateTodo(todo: ToDo){
    let todoItem = this.todos.findIndex(i => i.id === todo.id);
    this.todos[todoItem] = todo;

    return todoItem;
  }

  // deleteToDo2(toDo: ToDo) {
  //   const toDoId = this.toDoList.findIndex(i => i.id === toDo.id);
  //   this.toDoList.splice(toDoId, 1);

  //   return this.toDoList;
  // }

  deleteTodo(toDo: ToDo) {
    this.todos = this.todos.filter(t => t.id !== toDo.id);

    return this;
  }

  getLastTodoId(){
    return this.todos[this.todos.length -1].id;
  }

  getTodoById(id: number): ToDo{
    return this.todos
    .filter(todo => todo.id === id)
    .pop();
  }

  updateTodoById(id: number, values: Object = {}): ToDo{
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  toggleTodoDone(todo: ToDo){
    let updatedTodo = this.updateTodoById(todo.id,{
      done: !todo.done
    });
    return updatedTodo;
  }
}

import { Component, OnInit, Input, OutputDecorator ,EventEmitter, Output } from '@angular/core';
import { ToDo } from '../Models/to-do';
import { ToDoService } from '../Services/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  // providers: [ToDoService]
})
export class ToDoListComponent implements OnInit {

  newTodo: ToDo;
  @Output() public childEvent = new EventEmitter();

  constructor(private todoService: ToDoService) {}

  addTodo(value: string){
    this.newTodo = new ToDo();
    this.newTodo.titel = value;
    this.todoService.addTodo(this.newTodo);
    
  }

  toggleTodoDone(todo){
    this.todoService.toggleTodoDone(todo)
    this.getTodosDone();
  }

  removeTodo(todo){
    this.todoService.deleteTodo(todo);
    this.getTodosDone();
  }

  get todos(){
    this.getTodosDone();
    return this.todoService.getAllTodo();
  }

  getTodosDone(){
    this.childEvent.emit(this.todoService.getTodoDone());
  }

  ngOnInit(): void {
    // this.todos = this.todoService.getAllTodo();
  }

}

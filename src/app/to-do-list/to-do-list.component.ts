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

  // @Input() todos;

   



newTodo: ToDo = new ToDo();

  constructor(private todoService: ToDoService) {}

  addTodo(value: string){
    this.newTodo = new ToDo();
    this.newTodo.titel = value;
    this.todoService.addTodo(this.newTodo);
    
  }

  @Output() public childEvent = new EventEmitter();


  toggleTodoDone(todo){
    this.todoService.toggleTodoDone(todo)
    this.getTodosDone();
  }

  removeTodo(todo){
    this.todoService.deleteTodo(todo);
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

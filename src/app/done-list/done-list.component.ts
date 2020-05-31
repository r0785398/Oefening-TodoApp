import { Component, OnInit, Input } from '@angular/core';
import { ToDoService } from '../Services/to-do.service';
import { ToDo } from '../Models/to-do';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  // public doneList = [];
  @Input('parentData') public doneList;
  // @Input() public parentData;

  constructor(){}

  // constructor(private _todoService: ToDoService) { }

  ngOnInit(): void {
    // this.doneList = this._todoService.getTodoDone();
  }

    // @Input() doneList;
  // constructor(){

  // }

  // ngOnInit(){

  // }

}

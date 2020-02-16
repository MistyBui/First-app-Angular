import { TodoService } from '../../shared/services/todo.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService],
})
export class TodoListComponent implements OnInit {
  todoTitle : string;

  constructor(
    public todoService: TodoService,
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.todoTitle= '';
  }
  addTodo(): void {
    if(this.todoTitle.trim().length === 0){
      return;
    }
    this.todoService.addTodo(this.todoTitle);
    this.todoTitle='';
  }

 }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo-models';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/reducer';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  
  todos$!: Observable<Todo[]>;

  constructor(private readonly store: Store<AppState>){}

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(state => state.todosList));
    this.todos$.subscribe(todos => {
      console.log('Todos:', todos);
    });
  }
}

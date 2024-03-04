import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo-models';
import { AppState } from '../../store/reducer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(private readonly store: Store<AppState>){}

  ngOnInit(): void {
    this.todos$ = this.store.pipe(select(state => state.todosList));
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppState } from '../../store/reducer';
import { Store } from '@ngrx/store';
import { addTodo } from '../../store/actions';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  todoInput=""
  constructor(private readonly store: Store<AppState>){}
  updateTodos(){
    console.log("aayush")
    console.log(this.todoInput)
    this.store.dispatch(addTodo({text: this.todoInput}))
  }
}

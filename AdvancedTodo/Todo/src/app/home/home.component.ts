import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, TodoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  todoList: String[] = []
  todoInpurReceived(input: String){
    this.todoList.push(input)
  }
}

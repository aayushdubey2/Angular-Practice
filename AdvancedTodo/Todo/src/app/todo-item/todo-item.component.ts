import { Component, Input } from '@angular/core';
import { Todo } from '../../models/todo-models';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() item!: Todo;
}

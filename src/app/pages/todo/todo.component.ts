import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todoList: String[] = [];

  saveInput(value: string) {
    this.todoList.push(value);
    console.log('Stored value:', this.todoList);
  }

}

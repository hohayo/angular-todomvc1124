import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputHint = 'What needs to be done?';
  colspan = 2;
  todos = [];

  addTodo(element: HTMLInputElement) {
    if (element.value) {
      this.todos.push(element.value)
    }
  }

}

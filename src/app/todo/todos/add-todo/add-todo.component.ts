import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../share/todo.model";

@Component({
  selector: 'app-add-todo',
  template: `
    <button (click)="addTodo(newText)">+</button>
    <input type="text" placeholder="여기에 할일을 입력하세요" [(ngModel)]="newText" />
  `,
  styles: [`
  :host{
    display: block;
    padding:16px 16px 16px 10px;
    background-color:white;
  }
  input{
    display: inline-block;
    font-size:18px;
    border:none;

  }
  input:focus, button:focus {
    outline:none;
  }
  button {
    width: 24px;
    height:24px;
    border-radius: 24px;
    color:white;
    font-size:16px;
    line-height:17px;
    border:1px solid dimgray;
    background-color: darkblue;
  }
  `
  ]
})
export class AddTodoComponent implements OnInit {
 @Input() todos:Todo[]
 @Output() onTodoAdded = new EventEmitter();
  newText:string
  constructor() { }

  ngOnInit(): void {
  }
  addTodo(newText) {
    console.log(this.todos.find((todo)=>todo.text===newText))
    if(this.todos.find((todo)=>todo.text===newText)){
      alert("같은 계획이 있습니다!")
    }
    this.onTodoAdded.emit(newText)
    this.newText=""
  }
}

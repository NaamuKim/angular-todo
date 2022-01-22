import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../share/todo.model";


@Component({
  selector: 'app-todo',
  template: `
    <input type="checkbox" [checked]="todo.done"><label>{{todo.text}}</label><button (click)="deleteTodo($event)">❌</button>
  `,
  styles: [
    `
        :host {
          display:block;
          padding:16px;
          color: darkgray;
          background-color:white;
        }
        input  {
          position: relative;
        }
        input:before{
          content: "";
          display: inline-block;
          width:22px;
          height:22px;
          background-color: white;
          border-radius: 22px;
          position:absolute;
          top:-6px;
          left:-8px;
          border: 1px solid darkgray;
        }

        input:checked:after{
          content:'\\2713';
          display: inline-block;
          font-size:18px;
          width:22px;
          height:22px;
          border-radius: 22px;
          position:absolute;
          top:-6px;
          left:-8px;
          border:1px solid darkgray;
          background-color:dimgray;
          text-align:center;
          color:white;
        }

        input:checked +label{
          text-decoration: line-through;
        }
        button{
          cursor:pointer;
          margin-left: 20px;
          border-radius: 10px;
        }
    `
  ]
})
export class TodoComponent implements OnInit {
  @Input() todo:Todo
  @Output() onDeleteTodo = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  deleteTodo(event){
    const input=event.target.parentElement;
    const labelText=event.target.previousElementSibling.innerText
    this.onDeleteTodo.emit(labelText)
    input.remove();

  }
}

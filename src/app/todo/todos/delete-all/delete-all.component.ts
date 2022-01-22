import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../share/todo.model";

@Component({
  selector: 'app-delete-all',
  template: `
    <button (click)="deleteAll()">전체 삭제하기</button>
  `,
  styles: [
    `
    button{
      width:120px;
      height:40px;
      border: 1px solid darkgray;
      background: #fff;
      border-radius:10px;
      cursor:pointer;
    }
    `
  ]
})
export class DeleteAllComponent implements OnInit {
  @Input() todos:Todo[]
  constructor() { }

  ngOnInit(): void {
  }
  deleteAll(){
    this.todos=[];
    localStorage.removeItem("todos");
    location.reload();
  }
}

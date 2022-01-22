// to-do-list 요구 명세
// 1. 화면은 어떤 식이든 상관없습니다.(콘솔, gui, 웹, 앱)
// 2. 추가, 수정, 삭제 기능이 있어야합니다.
// 3. 전체 목록을 한번에 삭제하는 기능이 필요합니다.
// 4. 사용자가 같은 내용을 추가하려고 하면 "중복된 내용을 추가하고 있습니다" 등의 메시지로 사용자가 인지할 수 있어야합니다.
// 5. 화면을 나갔다 들어와도 작성했던 to-do-list를 확인할 수 있어야합니다.
// 6. 알고 있는 좋은 코드를 짤 수 있는 방식을 총동원 부탁드립니다.

import {Component, OnInit} from '@angular/core';
import {Todo} from "../share/todo.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  newText: string='';
  todos: Todo[];
  TODOS_KEY = "todos";
  savedToDos = localStorage.getItem(this.TODOS_KEY);
  today: Date=new Date();
  constructor() {
    this.todos = [
    ];
  }

  ngOnInit(): void {
    if (this.savedToDos !== null) {
      this.todos = JSON.parse(this.savedToDos);
      console.log(this.todos)
    }
  }

  saveToDos(){
    localStorage.setItem(this.TODOS_KEY, JSON.stringify(this.todos));
  }

  toggleTodo(todo) {
    todo.done = !todo.done;
    this.saveToDos()
  }
  addTodo(text:string){
      this.todos.push({
        text:text,
        done:false
      })
    this.saveToDos()
  }
deleteTodo(labelText:string){
    console.log(labelText);
  this.todos = this.todos.filter((todo) => todo.text !== labelText);
  this.saveToDos();
}




}

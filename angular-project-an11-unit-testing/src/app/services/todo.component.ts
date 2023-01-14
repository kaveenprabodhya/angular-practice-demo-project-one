import { OnInit } from '@angular/core';
import { TodoService } from './services';

export class TODOCOMPONENT implements OnInit {
  todos: any[] = [];
  message: any;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe((t: any) => {
      this.todos = t;
    });
  }

  add() {
    var newTodo = { title: '...' };
    this.service.add(newTodo).subscribe(
      (t: any) => this.todos.push(t),
      (err) => {
        this.message = err;
      }
    );
  }

  delete(id: number) {
    if (confirm('Are you sure?')) this.service.delete(id).subscribe();
  }
}

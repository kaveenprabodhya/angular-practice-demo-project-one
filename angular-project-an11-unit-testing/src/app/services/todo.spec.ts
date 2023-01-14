import { HttpClient } from '@angular/common/http';
import { Observable, from, EMPTY, throwError } from 'rxjs';
import { TodoService } from './services';
import { TODOCOMPONENT } from './todo.component';

describe('service', () => {
  let component: TODOCOMPONENT;
  let service: TodoService;
  let http: HttpClient;
  beforeEach(() => {
    service = new TodoService(http);
    component = new TODOCOMPONENT(service);
  });

  it('should set todos property with the items retuned from the serve', () => {
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([todos]);
    });

    component.ngOnInit();
    // expect(component.todos.length).toBeGreaterThan(0);
    // expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);
  });

  it('should call the serve to save changes when a new todo item added', () => {
    let spy = spyOn(service, 'add').and.callFake(() => {
      return EMPTY;
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    /* let spy = spyOn(service, 'add').and.callFake(() => {
      return from([todo]);
    }); */

    let spy = spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('shouldset the message porperty if server returned an error when adding new todo', () => {
    let error = 'error from the server';
    let spy = spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(EMPTY);
    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(EMPTY);
    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  });
});

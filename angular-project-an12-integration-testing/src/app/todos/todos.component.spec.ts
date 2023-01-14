import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TodosComponent } from './todos.component';
import { TodoService } from './todoservice';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  // let service: Partial<TodoService>;
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TodosComponent],
      providers: [TodoService],
    });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    // service = fixture.debugElement.injector.get(TodoService);
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
    service = TestBed.inject(TodoService);
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.returnValue(from([todos]));
    fixture.detectChanges();
    expect(component.todos.length).toBe(3);
  });
});

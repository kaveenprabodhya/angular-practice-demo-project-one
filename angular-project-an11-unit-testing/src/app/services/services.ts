import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('...');
  }

  add(todo: any) {
    return this.http.post('...', todo);
  }

  delete(id: number) {
    const url = '...' + id;
    return this.http.delete(url);
  }
}

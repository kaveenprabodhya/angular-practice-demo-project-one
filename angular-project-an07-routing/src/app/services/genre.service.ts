import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class GenreService extends DataService {
  constructor(http: HttpClient) {
    super('http://localhost:3900/api/genres', http);
  }
}

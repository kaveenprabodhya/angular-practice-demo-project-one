import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    @Inject(String) private apiEndPoint: string,
    private http: HttpClient
  ) {}

  getAll() {
    return this.http
      .get(this.apiEndPoint, { observe: 'body', responseType: 'json' })
      .pipe(catchError(this.handleError));
  }

  getById(id: string) {
    const url = `${this.apiEndPoint}/${id}`;
    return this.http.get(url).pipe(catchError(this.handleError));
  }

  create(resource: any) {
    return this.http
      .post(this.apiEndPoint, resource, {
        headers: {
          'x-auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdlYTZmYzJjMGU5ODM0OTA2ZWI2ZjQiLCJuYW1lIjoiVGhpdmFua2EgTGl5YW5hZ2UiLCJlbWFpbCI6InRoaXZhbmthLmxpeWFuYWdlQGdtYWlsLmNvbSIsImlhdCI6MTYzNTc1ODY4Mn0.hiApCdgDuiyQcRdSi-C1RH8lB7rZsypHPGkYUuuPKEg',
        },
      })
      .pipe(catchError(this.handleError));
  }

  update(id: string, resource: any) {
    const url = `${this.apiEndPoint}/${id}`;
    return this.http
      .put(url, resource, {
        headers: {
          'x-auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdlYTZmYzJjMGU5ODM0OTA2ZWI2ZjQiLCJuYW1lIjoiVGhpdmFua2EgTGl5YW5hZ2UiLCJlbWFpbCI6InRoaXZhbmthLmxpeWFuYWdlQGdtYWlsLmNvbSIsImlhdCI6MTYzNTc1ODY4Mn0.hiApCdgDuiyQcRdSi-C1RH8lB7rZsypHPGkYUuuPKEg',
        },
      })
      .pipe(
        map((updatedMovie: any) => {
          return updatedMovie as any;
        }),
        catchError(this.handleError)
      );
  }

  delete(id: string) {
    const url = `${this.apiEndPoint}/${id}`;
    return this.http
      .delete(url, {
        headers: {
          'x-auth-token':
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdlYTZmYzJjMGU5ODM0OTA2ZWI2ZjQiLCJuYW1lIjoiVGhpdmFua2EgTGl5YW5hZ2UiLCJlbWFpbCI6InRoaXZhbmthLmxpeWFuYWdlQGdtYWlsLmNvbSIsImlhdCI6MTYzNTc1ODY4Mn0.hiApCdgDuiyQcRdSi-C1RH8lB7rZsypHPGkYUuuPKEg',
        },
      })
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
      if (error.status === 404) return throwError(error);
      if (error.status === 401) return throwError(error);
    }
    return throwError(error);
  }
}

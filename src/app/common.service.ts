import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map(response => {
          // Modify the array response as needed
          return response.map(item => {
            return {
              id: item.id,
              title: item.title // .toUpperCase()  Example modification
            };
          });
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(text: string) {
    return this.http.get<any>(`${environment.googleBookApi}?q=${text}`);
  }

  getBook(bookId: string) {
    return this.http.get<any>(`${environment.googleBookApi}/${bookId}`);
  }
}

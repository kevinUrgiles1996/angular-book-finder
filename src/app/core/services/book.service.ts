import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../models/book.model';

interface Item {
  id: string;
  volumeInfo: Book;
}

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(text: string): Observable<Item[]> {
    return this.http
      .get<any>(`${environment.googleBookApi}?q=${text}`)
      .pipe(map((response: any) => response.items as Item[]));
  }

  getBook(bookId: string) {
    return this.http.get<any>(`${environment.googleBookApi}/${bookId}`);
  }
}

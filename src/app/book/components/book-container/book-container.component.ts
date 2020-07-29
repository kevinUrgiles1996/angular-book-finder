import { Component, OnInit } from '@angular/core';

import { BookService } from './../../../core/services/book.service';
import { Book } from './../../../core/models/book.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss'],
})
export class BookContainerComponent implements OnInit {
  books: Book[];
  isLoading = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  fetchBooks(text: string) {
    this.books = [];
    this.isLoading = true;
    this.bookService
      .getBooks(text)
      .pipe(
        map((data: any) => {
          return [...data.items];
        })
      )
      .subscribe((items) => {
        this.books = items.map((item) => {
          const { id } = item;
          const {
            title,
            subtitle,
            publisher,
            publishedDate,
            description,
            authors,
            categories,
            imageLinks,
          } = item.volumeInfo;
          return {
            id,
            title,
            subtitle,
            publisher,
            publishedDate,
            description,
            authors,
            categories,
            imageLinks,
          };
        });
        this.isLoading = false;
      });
  }

  clearResults(clear: boolean) {
    if (clear) {
      this.books = [];
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { BookService } from '@core/services/book.service';
import { Book } from '@core/models/book.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class BookContainerComponent implements OnInit {
  books: Book[];
  isLoading = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  fetchBooks(text: string) {
    this.books = [];
    this.isLoading = true;
    this.bookService.getBooks(text).subscribe((items) => {
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

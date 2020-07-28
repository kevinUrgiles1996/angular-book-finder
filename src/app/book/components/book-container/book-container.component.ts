import { Component, OnInit } from '@angular/core';

import { BookService } from './../../../core/services/book.service';
import { Book } from './../../../core/models/book.model';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss'],
})
export class BookContainerComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  fetchBooks(text: string) {
    this.bookService.getBooks(text).subscribe((data) => {
      const items = data.items;
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
    });
  }

  clearResults(clear: boolean) {
    if (clear) {
      this.books = [];
    }
  }
}

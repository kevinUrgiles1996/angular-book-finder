import { Component, OnInit } from '@angular/core';
import { Book } from './../../../core/models/book.model';

import { BookService } from './../../../core/services/book.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss'],
})
export class BookContainerComponent implements OnInit {
  books: any[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  fetchBooks(text: string) {
    this.bookService.getBooks(text).subscribe((data) => {
      console.log(data.items);
      this.books = data.items;
    });
  }

  clearResults(clear: boolean) {
    if (clear) {
      this.books = [];
    }
  }
}

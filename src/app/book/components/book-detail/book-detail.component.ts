import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from './../../../core/services/book.service';
import { Book } from './../../../core/models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book: Book;
  previewLink: string;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const { bookId } = params;
      this.previewLink =
        'https://books.google.com.ec/books?id=' +
        bookId +
        '&printsec=frontcover';
      this.bookService.getBook(bookId).subscribe((result) => {
        console.log(result.volumeInfo);
        this.book = result.volumeInfo;
      });
    });
  }
}

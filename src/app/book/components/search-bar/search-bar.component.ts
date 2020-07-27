import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() sendUserText = new EventEmitter<string>();
  @Output() clearResults = new EventEmitter<boolean>();
  searchForm: FormGroup;
  isClearVisible = false;

  constructor() {
    this.searchForm = new FormGroup({
      userText: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  searchBook(event: Event) {
    event.preventDefault();
    if (this.searchForm.valid) {
      this.isClearVisible = true;
      const { userText } = this.searchForm.value;
      this.sendUserText.emit(userText);
    }
  }

  clearSearch() {
    this.isClearVisible = false;
    this.searchForm.reset();
    this.clearResults.emit(true);
  }
}

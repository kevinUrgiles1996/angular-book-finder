import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookContainerComponent } from './components/main-container/main-container.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BookContainerComponent,
  },
  {
    path: ':bookId',
    component: BookDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}

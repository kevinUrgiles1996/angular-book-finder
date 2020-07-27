import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';

import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { BookService } from './core/services/book.service';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}

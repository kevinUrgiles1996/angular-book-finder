import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';

import { AboutRoutingModule } from './about-routing.module';
import { AppInfoComponent } from './components/app-info/app-info.component';

@NgModule({
  declarations: [AppInfoComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule],
})
export class AboutModule {}

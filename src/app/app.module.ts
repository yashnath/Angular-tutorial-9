import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { UufuComponent } from './uufu/uufu.component';
import { UuComponent } from './uu/uu.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    UufuComponent,
    UuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

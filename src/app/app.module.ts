import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SelectPipe } from './select.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBaXRfSzLMj5yhzOxOnKWYTZ00bVozr0vM',
      language: 'zh-TW'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

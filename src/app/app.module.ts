import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { AppRoutingModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { BibliotecaListComponent } from './components/biblioteca-list/biblioteca-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

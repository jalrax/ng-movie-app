import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';



import { AppComponent } from './app.component';
import {MovieComponent} from './movie/movie.component';
import {CardComponent} from './card/card.component';
import {SearchComponent} from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    CardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

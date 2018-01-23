import {Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {MovieComponent} from './movie/movie.component';

export const appRoutes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'movie/:id', component: MovieComponent},
];

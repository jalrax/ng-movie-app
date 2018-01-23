import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;
  cast: Array<Object>;

  constructor(private _moviesServices: SearchService,
              private router: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
      this._moviesServices.getMovieCredits(id).subscribe((data: any) => {
        data.cast = data.cast.filter((item) => {
          return item.profile_path;
        });
        this.cast = data.cast.slice(0, 4);
      });
    });
  }

}

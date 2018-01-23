import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SearchService {
  apikey: string;

  constructor(private http: HttpClient) {
    this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
  }

  searchMovies(searchStr: string) {
    return this.http
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${searchStr}`);
  }

  getMovie(id: string) {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apikey}&query=${id}`);
  }

  getMovieCredits(id: string) {
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apikey}&query=${id}`);
  }
}

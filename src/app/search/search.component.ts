import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchRes: any;
  searchStr: string;


  constructor(private _moviesService: SearchService) {
  }

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr)
      .subscribe((data: any) => {
        this.searchRes = data.results;
      });
  }

}

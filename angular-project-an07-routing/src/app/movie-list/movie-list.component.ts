import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { AlertService } from '../services/alert.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private mvService: MovieService,
    private alrtServ: AlertService
  ) {}

  ngOnInit(): void {
    this.mvService.getAll().subscribe((data: any) => {
      this.movies = data;
    });
  }

  deleteMovie(movie: Movie) {
    // let index = this.movies.indexOf(movie);
    // this.movies.splice(index, 1);
    this.mvService.delete(movie._id).subscribe(
      () => {
        this.movies = this.movies.filter((m) => m._id !== movie._id);
        this.alrtServ.success('Movie Deleted!', { keepAfterRouteChange: true });
      },
      (error) => {
        // this.movies.splice(index, 0, movie);
      }
    );
  }
}

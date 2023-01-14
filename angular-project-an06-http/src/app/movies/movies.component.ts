import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotAuthError } from '../common/not-auth-error';
import { NotFoundError } from '../common/not-found-error';
import { Movie } from '../interfaces/movie';
import { GenreService } from '../services/genre.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  genres: any = [];
  submitted: boolean = false;

  form: FormGroup;

  constructor(
    private movieService: MovieService,
    fb: FormBuilder,
    private genreService: GenreService
  ) {
    this.form = fb.group({
      title: ['', [Validators.required]],
      genreId: [null, [Validators.required]],
      numberInStock: ['', [Validators.required]],
      dailyRentalRate: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.movieService.getAll().subscribe((data) => {
      this.movies = data;
    });
    this.genreService.getAll().subscribe((data) => {
      this.genres = data;
    });
  }

  get getMovieControls() {
    return this.form.controls;
  }

  createMovie() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let movie = this.form.value;

    this.movieService.create(movie).subscribe(
      (newPost: any) => {
        this.movies.push(newPost);
      },
      (error) => {
        let index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
        console.log(error);
      }
    );

    this.reset();
  }

  private reset() {
    this.submitted = false;
    this.form.reset();
  }

  updateMovie() {
    let id = '617feb8e68ba9c254cb9a36b';
    let movie = {
      title: 'Jumanji Welcome to the Jungle',
      genreId: '617c37351ec7112cc0d7e6ac',
      numberInStock: 4,
      dailyRentalRate: 1,
    };
    this.movieService.update(id, movie).subscribe((data: any) => {
      console.log(data);
      const index = data ? this.movies.findIndex((m) => id === m._id) : -1;
      if (index > -1) {
        this.movies[index] = data;
      }
    });
  }

  deleteMovie(movie: Movie) {
    this.movieService.delete(movie._id).subscribe(
      (response) => {
        let index = this.movies.indexOf(movie);
        this.movies.splice(index, 1);
      },
      (error) => {
        if (error instanceof NotFoundError) {
          alert('This Movie has already deleted');
        } else if (error instanceof NotAuthError) {
          alert('User not login. Please log in');
        } else {
          throw error;
        }
      }
    );
  }
}
